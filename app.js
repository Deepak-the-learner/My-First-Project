const p1Score = document.querySelector('#p1Button');
const p2Score = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const p1 = document.querySelector('#p1score');
const p2 = document.querySelector('#p2score')
const Play = document.querySelector('#maxScore');
let isGameOver = false;
let p1score = 0;
let p2score = 0;
let winningScore = 5;
Play.addEventListener('change',function (){
	winningScore = parseInt(this.value);
})
p1Score.addEventListener('click',(e)=>{
	p1score++;
	p1.innerText = p1score;
	if(p1score === winningScore){
		isGameOver = true;
		p1.classList.add('winner');
		p2.classList.add('loser');
	}
	if(isGameOver){
		p1Score.disabled = true;
		p2Score.disabled = true;
	}
})
p2Score.addEventListener('click',(e)=>{
	p2score++;
	p2.innerText = p2score;
	if(p2score === winningScore){
		isGameOver = true;
		p1.classList.add('winner');
		p2.classList.add('loser');
	}
	if(isGameOver){
		p1Score.disabled = true;
		p2Score.disabled = true;
	}
})
reset.addEventListener('click',(e)=>{
	isGameOver = false;
	p2score = 0;
	p1score = 0;
	p1.innerText = p1score;
	p2.innerText = p2score;
	if(p1.classList.contains('winner')){
		p1.classList.remove('winner');
	}
	if(p1.classList.contains('loser')){
		p1.classList.remove('loser');
	}
	if(p2.classList.contains('winner')){
		p2.classList.remove('winner');
	}
	if(p2.classList.contains('loser')){
		p2.classList.remove('loser');
	}
	p1Score.disabled = false;
	p2Score.disabled = false;
})