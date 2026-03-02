import { stage } from './stage.js';
import { drawTestEffect } from '../effects/TestEffect.js';

export function createSketch(s){
	let t0 = 0; //アプリが始まった瞬間の時間
	let last = 0; //前回のフレームの時間

	//PIPELINE定義
	const PIPELINE = [
		stage('BG', () => true, ({ s }) => { s.background(0); }),
		stage('EFFECT_TEST', () => true, ({ s, sec, dt }) =>{ drawTestEffect(s, { sec, dt }); }),

		stage('HUD', () => true, ({ s, sec, dt }) => {
			s.fill(255);
			s.textSize(24);
			s.text('TEST', 40, 40);
      s.text(`sec: ${sec.toFixed(2)}`, 40, 80);
      s.text(`dt: ${dt.toFixed(3)}`, 40, 120);
		})
	];
	

	s.setup = () =>{
		s.createCanvas(window.innerWidth, window.innerHeight); //画面幅・高さを読み同じサイズのcanvasを生成
		s.noStroke();
		t0 = performance.now() / 1000; //現在時刻を絶対基準として定める(秒)。
		last = t0;
	};

	//ブラウザサイズ変更時のキャンバスリサイズ
	s.windowResized = () =>{
		s.resizeCanvas(window.innerWidth, window.innerHeight);
	};

	s.draw = () =>{
		const now = performance.now() / 1000; //今この時の絶対時間
		const dt = now - last; //フレーム間の経過時間
		const sec = now - t0; //起動からの経過時間
		last = now; //時刻の更新

		const ctx = { s, dt, sec };

		//PIPELINE実行
		for(const st of PIPELINE){
			if(st.enabledFn()){
				st.drawFn(ctx);
			}
		}
	};
}
