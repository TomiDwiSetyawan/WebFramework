import React from 'react';
import logo from './logo.svg';
import './App.css';
import foto from './Assets/hasil.png';

function App() {
  return (
    <div className="App">
      <div class="resume">
        <div class="resume_left">
          <div class="resume_profile">
            <img src={foto} style={{ width: 250, height: 250, borderRadius: 400 / 2 }}></img>
          </div>
          <div class="resume_content">
            <div class="resume_item resume_info">
              <div class="title">
                <p class="bold">Tomi Dwi Setyawan</p>
                <p class="regular">Polinema Student</p>
              </div>
              <ul>
                <li>
                  <div class="icon">
                    <i class="fas fa-map-signs"></i>
                  </div>
                  <div class="data">
                    Ngoro, Mojokerto <br /> INA
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                  <div class="data">
                    +6285-748-988304
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="data">
                    TomiDwiSetyawan1
                  </div>
                </li>
              </ul>
            </div>
            <br />
            <div class="resume_item resume_skills">
              <div class="title">
                <p class="bold">skill's</p>
              </div>
              <ul>
                <li>
                  <div class="skill_name">
                    HTML
                  </div>
                  <div class="skill_progress">
                    <span style={{ width: 90 }}></span>
                  </div>
                  <div class="skill_per">90%</div>
                </li>
                <li>
                  <div class="skill_name">
                    REACT
                  </div>
                  <div class="skill_progress">
                    <span style={{ width: 75 }}></span>
                  </div>
                  <div class="skill_per">75%</div>
                </li>
                <li>
                  <div class="skill_name">
                    CI
                  </div>
                  <div class="skill_progress">
                    <span style={{ width: 85 }}></span>
                  </div>
                  <div class="skill_per">85%</div>
                </li>
                <li>
                  <div class="skill_name">
                    CSS
                  </div>
                  <div class="skill_progress">
                    <span style={{ width: 90 }}></span>
                  </div>
                  <div class="skill_per">90%</div>
                </li>
              </ul>
            </div>
            <br />
            <div class="resume_item resume_social">
              <div class="title">
                <p class="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div class="icon">
                    <i class="fab fa-github"></i>
                  </div>
                  <div class="data">
                    <p class="semi-bold">Github</p>
                    <p>Tomi Dwi Setyawan</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fab fa-instagram"></i>
                  </div>
                  <div class="data">
                    <p class="semi-bold">Instagram</p>
                    <p>Tomi Dwi Setyawan</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fab fa-facebook-square"></i>
                  </div>
                  <div class="data">
                    <p class="semi-bold">Facebook</p>
                    <p>Tomi Dwi Setyawan</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fab fa-youtube"></i>
                  </div>
                  <div class="data">
                    <p class="semi-bold">Youtube</p>
                    <p>Tomi Dwi Setyawan</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="resume_right">
          <div class="resume_item resume_about">
            <div class="title">
              <p class="bold">About Me</p>
            </div>
            <p>My name is Tomi Dwi Setyawan, my nickname is Tomi. I'm a Polinema student from the department of informatics.</p>
          </div>
          <div class="resume_item resume_work">
            <div class="title">
              <p class="bold">Experience</p>
            </div>
            <ul>
              <li>
                <div class="date">2019</div>
                <div class="info">
                  <p class="semi-bold">Project Toko Kelontong</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
              </li>
              <li>
                <div class="date">2019 - 2020</div>
                <div class="info">
                  <p class="semi-bold">Project Web Kartika Sari</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="resume_item resume_education">
            <div class="title">
              <p class="bold">Education</p>
            </div>
            <ul>
              <li>
                <div class="date">2006 - 2011</div>
                <div class="info">
                  <p class="semi-bold">SDN Kutogirang</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
              </li>
              <li>
                <div class="date">2011 – 2014</div>
                <div class="info">
                  <p class="semi-bold">SMPN 2 Ngoro</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
              </li>
              <li>
                <div class="date">2014 – 2017</div>
                <div class="info">
                  <p class="semi-bold">SMAN 1 Ngoro</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="resume_item resume_hobby">
            <div class="title">
              <p class="bold">Hobby</p>
            </div>
            <ul>
              <li class="hoverHob"><i class="fas fa-cat"></i></li>
              <li class="hoverHob"><i class="fas fa-gamepad"></i></li>
              <li class="hoverHob"><i class="fas fa-book"></i></li>
              <li class="hoverHob"><i class="fas fa-code"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
