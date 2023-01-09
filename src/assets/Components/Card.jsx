import React from 'react'
import './card.scss'
import Img1 from './../img/img-1.jpg'
import Img2 from './../img/img-2.jpg'
import Img3 from './../img/img-3.jpg'

function Card() {
  return (
    <div class="conteiner">
			<div class="box">
				<b></b>
				<img src={Img1} alt="dimg1"/>
				<div class="content">
					<h2>
						junior programmer
						<br/>
						<span>
						Frontend
						</span>
					</h2>
					<ul class="sci">
						<li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
					</ul>
				</div>
			</div>
			<div class="box">
				<b></b>
				<img src={Img2} alt="dimg1"/>
				<div class="content">
					<h2>
						Semi-Señor programmer
						<br/>
						<span>
						Frontend
						</span>
					</h2>
					<ul class="sci">
						<li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
					</ul>
				</div>
			</div><div class="box">
				<b></b>
				<img src={Img3} alt="dimg1"/>
				<div class="content">
					<h2>
						Señor programmer
						<br/>
						<span>
						Frontend
						</span>
					</h2>
					<ul class="sci">
						<li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
  )
}

export default Card