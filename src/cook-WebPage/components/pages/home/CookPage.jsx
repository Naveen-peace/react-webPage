import React, { useState } from 'react'
import Layout from '../../../layout/Layout'
import Hero from '../../../asset/image/Hero Img.png'
// import image10 from '../../../asset/icon/image 10.svg'
import info from '../../../asset/icon/info.svg'
import arrow from '../../../asset/icon/arrow-up-right.svg'
import recticon from '../../../asset/icon/Rectangle 16.svg'
import search from '../../../asset/icon/search.svg'
import bake from '../../../asset/icon/image 10(1).svg'
import bake1 from '../../../asset/icon/veg-bowl.svg'
import bakes from '../../../asset/icon/image 10(1-1).svg'
import bake2 from '../../../asset/icon/image 10 (3).svg'
import bake3 from '../../../asset/icon/image 10 (4).svg'
import bake4 from '../../../asset/icon/image 10 (5).svg'
import bake5 from '../../../asset/icon/image 10 (6).svg'
import arrowdown from '../../../asset/icon/arrow-down-circle.svg'
import group from '../../../asset/icon/Group 8.svg'
import frame from '../../../asset/icon/Frame 45.svg'
import frame1 from '../../../asset/icon/Frame 45 (1).svg'
import frame2 from '../../../asset/icon/Frame 45 (2).svg'
import cooking from '../../../asset/image/Rectangle 17.png'
import uparrow from '../../../asset/icon/image 13.svg'
import rect from '../../../asset/icon/Rectangle 20.svg'
import rect1 from '../../../asset/icon/Rectangle 20 (1).svg'
import rect2 from '../../../asset/icon/Rectangle 20 (2).svg'
import vector from '../../../asset/icon/Vector 12.svg'
import work from '../../../asset/image/Rectangle_21.png'
import work1 from '../../../asset/image/Rectangle 21(1).png'
import work2 from '../../../asset/image/Rectangle 21 (2).png'
import tie from '../../../asset/icon/Frame 45 (2).svg'
import tie1 from '../../../asset/icon/Group 10.svg'
import tick from '../../../asset/icon/tick-icon.svg'
import becomechef from '../../../asset/image/become-chef.png'
import dulltick from '../../../asset/icon/dull-tick.svg'
import becamestudent from '../../../asset/image/become-student.png'
import studentlength from '../../../asset/image/become-student-length.png'
import pizza from '../../../asset/image/pizza.png'
import taco from '../../../asset/image/taco.jpg'
import rasagula from '../../../asset/image/rasagulla.png'
import steak from '../../../asset/image/steak-french-fries.jpg'
import calander from '../../../asset/icon/calendar.svg'
import Instagram from '../../../asset/icon/instagram.svg'
import twitter from '../../../asset/icon/twitter.svg'
import facebook from '../../../asset/icon/facebook.svg'
import linkedin from '../../../asset/icon/linkedin.svg'
import face from '../../../asset/image/face.png'
import star from '../../../asset/icon/star.svg'
import heroradious from '../../../asset/icon/Hero-radius.svg'
import Modal from 'react-modal'
import CloseIcon from '@mui/icons-material/Close';
import '../../../asset/css/style.css'






function CookPage() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Layout />
      {/* master of art */}
      <div className='container'>
        <div className='hero-banner'>
          <div className='banner-1'>
            <h3>
              Master the Art of Cooking with<span>Experts</span>Worldwide
            </h3>
            <p>
              Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community. With COOK, learning, and teaching becomes a shared passion.
            </p>
            <div className='banner-2'>
              <div className='new-pop'>
                <button onClick={openModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4" />
                    <path d="M10 8L16 12L10 16V8Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  contentLabel="YouTube Video Modal"
                >
                  <div className='new-youtube'>
                    <iframe
                      title="YouTube Video"
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/aopS3q6f1GY"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                    <button className='new-youtube-1' onClick={closeModal}><CloseIcon /></button>
                  </div>
                </Modal>
              </div>
              <h6>Learn more in the COOK video</h6>
            </div>
            <div className='banner-2-1'>
              <div className='new-pop'>
                <button onClick={openModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4" />
                    <path d="M10 8L16 12L10 16V8Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  contentLabel="YouTube Video Modal"
                >
                  <div className='new-youtube'>
                    <iframe
                      title="YouTube Video"
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/aopS3q6f1GY"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                    <button className='new-youtube-1' onClick={closeModal}><CloseIcon /></button>
                  </div>
                </Modal>
              </div>
              <h6>Watch a video</h6>
            </div>
            <div className='button-1'>
              <button>Find Your Tutor</button>
              <button>Join Our Chefs</button>
            </div>
          </div>

          <div className='banner-left'>
            <img className='banner-left-0' src={Hero} alt="hero-img" />
            <div className='banner-sub'>
              <div className='banner-sub-1'>
                <img src={face} alt="justimage" />
                <div>
                  <h4>David Mitchell</h4>
                  <h5>4.8️ <img src={star} alt="icon" /></h5>
                </div>
              </div>
              <div className="banner-sub-2">
                <p>I've discovered a whole new world of flavors. Learning to cook has never been this fun and engaging!</p>
              </div>
            </div>
            <img className='banner-radious' src={heroradious} alt="icon" />
          </div>
        </div>
      </div>
      {/* master of art */}

      {/* landing stat */}
      <div className='landing'>
        <div className="container">
          <div className='total-broder'>
            <div className='total-employ'>
              <div className='boxes'>
                <h4>100+</h4>
                <h6>TalentedChefs</h6>
              </div>
              <div className='boxes'>
                <h4>1000+</h4>
                <h6>Students</h6>
              </div>
              <div className='boxes'>
                <h4 className='boxex-4'>4.8<svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27" fill="none">
                  <path d="M15 1L19.1715 9.22818L28.5 10.5557L21.75 16.9569L23.343 26L15 21.7282L6.657 26L8.25 16.9569L1.5 10.5557L10.8285 9.22818L15 1Z" fill="#D27722" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg></h4>
                <h6>Rating</h6>
              </div>
              <div className='boxes'>
                <h4>20+</h4>
                <h6>CookingCategories</h6>
              </div>
            </div>
          </div>


          <div className='vegan-top'>
            <div className='vegan-cook'>
              <div className='vegan-flex'>
                <img src={bake1} alt="veg bowl" />
                <div className='vegan-1'>
                  <h4>Vegan Cooking</h4>
                  <h6>Create delicious, nutritious meals with plant-based ingredients</h6>
                </div>
                <img className='right-top' src={arrow} alt="arrow" />
              </div>
            </div>

            <div className='vegan-space'>
              <div className="vegan-2">
                <img src={recticon} alt="rectangle" />
                <div className="vegan-3">
                  <h2>Explore & Learn</h2>
                  <p>Dive into a range of cooking styles and techniques tailored to your interests</p>
                </div>
              </div>
              <div className='vegan-4'>
                <img src={search} alt="search" />
                <p>Search tutors by category </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* landing stat */}
      {/* Categories Tiles */}
      <div>
        <div className="container">
          <div className="categories">
            <div className='categories-1'>
              <div className='tiles'>
                <img className='colour-change' src={bake} alt="just-an-icon" />
                <div className='tiles-1'>
                  <h3>Bakery</h3>
                  <p>Master baking: from rustic bread to delicate pastries</p>
                </div>
                <img className='icon-top' src={bakes} alt="icon" />
              </div>
            </div>
            <div className='categories-1'>
              <div className='tiles'>
                <img src={bake1} alt="just-an-icon" />
                <div className='tiles-1'>
                  <h3>Vegan Cooking</h3>
                  <p>Create delicious, nutritious meals with plant-based ingredients</p>
                </div>
                <img className='icon-top' src={arrow} alt="icon" />
              </div>
            </div>
            <div className='categories-1'>
              <div className='tiles'>
                <img src={bake2} alt="just-an-icon" />
                <div className='tiles-1'>
                  <h3>Seafood Mastery</h3>
                  <p>Dive into seafood: from grilling fish to creating sushi</p>
                </div>
                <img className='icon-top' src={arrow} alt="icon" />
              </div>
            </div>

            <div className='categories-1'>
              <div className='tiles'>
                <img src={bake3} alt="just-an-icon" />
                <div className='tiles-1'>
                  <h3>BBQ & Grilling</h3>
                  <p>Fire up your skills with mouth-watering BBQ dishes</p>
                </div>
                <img className='icon-top' src={arrow} alt="icon" />
              </div>
            </div>
            <div className='categories-1'>
              <div className='tiles'>
                <img src={bake4} alt="just-an-icon" />
                <div className='tiles-1'>
                  <h3>Wine Pairing</h3>
                  <p>Enhance culinary experiences by mastering wine pairing</p>
                </div>
                <img className='icon-top' src={arrow} alt="icon" />
              </div>
            </div>
            <div className='categories-1'>
              <div className='tiles'>
                <img src={bake5} alt="just-an-icon" />
                <div className='tiles-1'>
                  <h3>Cake Decorating</h3>
                  <p>Unleash creativity with cake decorating techniques</p>
                </div>
                <img className='icon-top' src={arrow} alt="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className='categories-2'>
          <p>Show more</p>
          <img src={arrowdown} alt="icon" />
        </div>
      </div>
      {/* Categories Tiles */}
      {/* our benifits */}
      <div className="benifits">
        <div className="container">
          <div className="benifits-1">
            <h2>Our Unique Benefits</h2>
            <p>Experience the perks of learning and teaching cooking on our platform</p>
            <img className='icon-fixed' src={group} alt="icon" />
          </div>

          <div className='benifits-flex'>
            <div className="benifits-2">
              <img src={frame} alt="icon" />
              <h3>Expert Chefs</h3>
              <p>Learn from the best. Our platform features professional chefs from around the world who bring their unique experiences and culinary secrets to every class.</p>
            </div>

            <h1 className='vector'>|</h1>

            <div className="benifits-2">
              <img src={frame1} alt="icon" />
              <h3>Save Time and Money</h3>
              <p>Embrace the convenience of learning from home. Save time on travel, reduce dining-out expenses, and master your kitchen with our online cooking classes..</p>
            </div>

            <h1 className='vector'>|</h1>

            <div className="benifits-2">
              <img src={frame2} alt="icon" />
              <h3>Accessible Cooking</h3>
              <p>Start your culinary journey with ease. Our user-friendly platform makes navigation simple, letting you focus on learning and enjoying your online cooking classes.</p>
            </div>
          </div>
        </div>
      </div>
      {/* our benifits */}
      {/* advantage */}
      <div className="advantage">
        <div className="container">
          <div className="advantage-flex">
            <div className="advantage-1">
              <img className='advantage-img-1' src={cooking} alt="just-an-img" />
              <div className='advantage-sub'>
                <h4>Level up <img src={uparrow} alt="icon" /></h4>
                <p>Take your culinary skills to new heights. Our platform provides you with the expert guidance you need to refine your skills and cook like a pro</p>
              </div>
            </div>
            <div className='advantage-2'>
              <h2>Other Advantages</h2>
              <h3>Other Benefits</h3>
              <div className='advantage-sub-2'>
                <img src={rect} alt="icon" />
                <div className='advantage-2-1'>
                  <h3>Diverse Range of Classesh</h3>
                  <p>Explore the culinary world with our vast array of online cooking classes. Whether you're a beginner or a seasoned cook, we have a class that suits your skill level and interests.</p>
                </div>
              </div>
              <div className='advantage-sub-2'>
                <img src={rect1} alt="icon" />
                <div className='advantage-2-1'>
                  <h3>Opportunity to Teach</h3>
                  <p>Share your culinary wisdom. If you're an experienced cook, our platform allows you to teach your classes, reach a global audience, and earn income.</p>
                </div>
              </div>
              <div className='advantage-sub-2'>
                <img src={rect2} alt="icon" />
                <div className='advantage-2-1'>
                  <h3>Interactive Lessons</h3>
                  <p>Engage in real-time with expert chefs. Our interactive online cooking classes allow you to ask questions, receive instant feedback, and learn hands-on from the pros.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* advantage */}
      {/* how it work */}
      <div className="how-work">
        <div className="container">
          <div className="how-work-1">
            <div className="how-work-2">
              <img src={vector} alt="icon" />
              <div className='how-work-sub-1'>
                <h2>How It Works</h2>
                <p>Getting Started with the COOK Platform</p>
              </div>
            </div>
            <div className='how-work-3'>
              <img src={search} alt="icon" />
              <p>Search tutors by category </p>
            </div>
          </div>
          <div className='how-work-flex'>
            <div className='how-work-padding'>
              <div className='how-work-4'>
                <div className='how-work-4-1'>
                  <h1>1</h1>
                  <img src={work} alt="just-an-pic" />
                </div>
                <div className='how-work-4-2'>
                  <h3>Explore Our Culinary Experts</h3>
                  <p>Begin by browsing through our diverse selection of professional tutors and cooking groups. Each tutor brings their unique culinary expertise and passion, ensuring you have a variety of cooking styles and cuisines to choose from.</p>
                  <button>Browse Tutors</button>
                </div>
              </div>
            </div>

            <div className='how-work-padding-1'>
              <div className='how-work-2page'>
                <div className='how-work-4-3'>
                  <h3>Select Your Perfect Match</h3>
                  <p>Once you've explored our range of tutors, choose the one that resonates most with you. Their profiles provide detailed information, such as their areas of expertise, availability, and reviews. Scheduling a lesson has never been easier.</p>
                </div>
                <div className='how-work-4-3-1'>
                  <h1>2</h1>
                  <img className='img-adjust-1' src={work1} alt="just-an-pic" />
                </div>
              </div>
            </div>

            <div>
              <div className='how-work-4'>
                <div className='how-work-4-1'>
                  <h1>3</h1>
                  <img src={work2} alt="just-an-pic" />
                </div>
                <div className='how-work-4-2'>
                  <h3>Enjoy Your Interactive Lesson</h3>
                  <p>Step into your online kitchen and start cooking! Our lessons are designed to be fun and interactive, enabling you to learn directly from the experts. After the class, you can review your experience and track your progress.</p>
                  <button>Sign up for free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='money-back-guarant'>
        <div className='container-sub'>
          <div className='money-guarantee'>
            <div className='money-back'>
              <div className='money-back-1'>
                <h3>Money-back guarantee</h3>
                <p>We believe you'll enjoy your first cooking lesson. However, we've got your back if anything goes differently than expected. Our money-back guarantee ensures you can take the first step with complete confidence.</p>
              </div>
              <div>
                <img className='money-1' src={tie} alt="icon" />
                <img className='money-2' src={tie1} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* how it work */}
      {/* become a chef */}
      <div >
        <div className="container">
          <div className="become-chef">
            <div className="become-chef-1">
              <h2>Become A Chef</h2>
              <p>Share your culinary secrets, inspire cooking enthusiasts worldwide, and grow your career like never before. Our platform offers a unique way to connect, teach, and earn.</p>
              <div className="become-chef-2">
                <div className='become-chef-sub-2'>
                  <img src={tick} alt="tick-icon" />
                  <p><span>Build Your Brand.</span>Showcase your culinary skills and build your brand within our community.</p>
                </div>
                <div className='become-chef-sub-2'>
                  <img src={tick} alt="tick-icon" />
                  <p><span>Expand Your Reach.</span>Connect with cooking enthusiasts across the globe and expand your audience beyond geographical limits.</p>
                </div>
                <div className='become-chef-sub-2'>
                  <img src={tick} alt="tick-icon" />
                  <p><span>Grow Your Business Faster.</span>Utilize our platform's features and resources to accelerate your growth and increase your income.</p>
                </div>
              </div>
              <div className="become-chef-3">
                <button>Become a chef</button>
              </div>
              <h5> <img src={info} alt="info-icon" /> Learn how our platform works</h5>
            </div>
            <div className='become-chef-4'>
              <img src={becomechef} alt="justimage" />
            </div>
          </div>
        </div>
      </div>
      {/* become a chef */}
      {/* become student */}
      <div className='student'>
        <div className="container">
          <div className='become-student-background'>
            <div className="become-student">
              <div className='become-student-4'>
                <img className='student-width' src={becamestudent} alt="justimage" />
                <img className='student-length' src={studentlength} alt="justimage" />
              </div>
              <div className="become-student-1">
                <h2>Become A Student</h2>
                <p>Kick-start your culinary adventure with COOK. We provide a space for cooking enthusiasts of all levels to learn, explore, and master culinary arts from professional chefs worldwide. So dive in and transform your kitchen into a playground of flavors.</p>
                <div className="become-student-2">
                  <div className='become-student-sub-2'>
                    <img src={dulltick} alt="tick-icon" />
                    <p><span>Diverse Classes:</span> Access a wide variety of classes catering to all skill levels and culinary interests.</p>
                  </div>
                  <div className='become-student-sub-2'>
                    <img src={dulltick} alt="tick-icon" />
                    <p><span>World-Class Chefs:</span> Learn directly from professional chefs sharing their unique culinary secrets.</p>
                  </div>
                  <div className='become-student-sub-2'>
                    <img src={dulltick} alt="tick-icon" />
                    <p><span>Interactive Learning:</span> Ask questions and receive real-time feedback in our interactive classes.</p>
                  </div>
                </div>
                <div className="become-student-3">
                  <button>Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* become student */}
      {/* cook blog */}
      <div>
        <div className="container">
          <div className="online-class">
            <div className="online-class-1">
              <div className="online-class-1-1">
                <img src={recticon} alt="icon" />
                <h3>Popular online classes</h3>
              </div>
              <div className="online-class-2">
                <div className="online-class-2-1">
                  <h4>Find a tutor by category</h4>
                  <div className="online-class-2-2">
                    <div className='flex-420px'>
                      <button>Bakery</button>
                      <button className='hidden'>Japanese Sushi Making</button>
                      <button>Thai</button>
                      <button>Seafood</button>
                      <button className='hidden'>Italian Cuisine</button>
                      <button>Vegan</button>
                      <button className='width-420px'>BBQ & Grilling</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="online-class-2-1">
                    <h4>Find a tutor by country</h4>
                    <div className="online-class-2-2">
                      <button>USA</button>
                      <button className='hidden'>Spain</button>
                      <button className='hidden'>France</button>
                      <button className='hidden'>Mexico</button>
                      <button>Germany</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cook-1">
              <div className="cook-1-1">
                <img src={recticon} alt="icon" />
                <h4>COOK Blog</h4>
              </div>
              <div className="cook-2">
                <div className="cook-2-1">
                  <img className='cook-img' src={pizza} alt="justimage" />
                  <div className="cook-2-2">
                    <div className="cook-2-3">
                      <img src={calander} alt="icon" />
                      <p>24 Apr, 2023</p>
                    </div>
                    <h4>Mastering the Art of Homemade Pizza</h4>
                  </div>
                </div>
                <div className="cook-2-1">
                  <img className='cook-img' src={rasagula} alt="justimage" />
                  <div className="cook-2-2">
                    <div className="cook-2-3">
                      <img src={calander} alt="icon" />
                      <p>24 Apr, 2023</p>
                    </div>
                    <h4>Delectable Homemade Ice Cream</h4>
                  </div>
                </div>
                <div className="cook-2-1">
                  <img className='cook-img' src={taco} alt="justimage" />
                  <div className="cook-2-2">
                    <div className="cook-2-3">
                      <img src={calander} alt="icon" />
                      <p>24 Apr, 2023</p>
                    </div>
                    <h4>How to Prepare Authentic Mexican Tacos</h4>
                  </div>
                </div>
                <div className="cook-2-1">
                  <img className='cook-img' src={steak} alt="justimage" />
                  <div className="cook-2-2">
                    <div className="cook-2-3">
                      <img src={calander} alt="icon" />
                      <p>24 Apr, 2023</p>
                    </div>
                    <h4>Tips and Techniques for a Restaurant-Quality Steak</h4>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* cook blog */}
      {/* footer */}
      <div className='footer'>
        <div className="container">
          <div className='footer-0'>
            <div className="footer-1">
              <div className="footer-2">
                <h2>COOK</h2>
                <div className="footer-2-1">
                  <div className='footer-new-1'>
                    <div className='footer-heading'>
                      <h5>About US</h5>
                      <ul className='footer-2-2'>
                        <li>Who we are</li>
                        <li>How it works</li>
                        <li>COOK reviews</li>
                      </ul>
                    </div>
                    <div className='footer-heading'>
                      <h5>For Students</h5>
                      <ul className='footer-2-2'>
                        <li>COOK blog</li>
                        <li>Find a tutor</li>
                      </ul>
                    </div>
                  </div>
                  <div className='footer-new-2'>
                    <div className='footer-heading'>
                      <h5>For Tutors</h5>
                      <ul className='footer-2-2'>
                        <li>Become an online chef</li>
                        <li>Teach cooking online</li>
                      </ul>
                    </div>
                    <div className='footer-heading'>
                      <h5>Supports</h5>
                      <ul className='footer-2-2'>
                        <li>Need a help?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer-line'>
              <hr
                style={{
                  background: '#FFDBB8',
                  height: "2px",
                  border: "none",
                }} npm start
              />
            </div>
            <div className='old-footer'>
              <div className="footer-3 ">
                <div className="footer-4">
                  <div className="footer-5">
                    <h5>USA <br />Your address goes there</h5>
                    <h5>+000000000</h5>
                  </div>
                  <div className="footer-6">
                    <div className="footer-6-1">
                      <h5>COOK’s Socials</h5>
                      <div className="footer-6-1-1">
                        <a href="https://www.instagram.com/"><img src={Instagram} alt="icon" /></a>
                        <a href="https://twitter.com/i/flow/login?lang=en"><img src={twitter} alt="icon" /></a>
                        <a href="https://www.facebook.com/"><img src={facebook} alt="icon" /></a>
                        <a href="https://in.linkedin.com/"><img src={linkedin} alt="icon" /></a>
                      </div>
                    </div>
                    <div className='footer-heading'>
                      <h5>Legal</h5>
                      <ul className='footer-2-2'>
                        <li>Terms Of Serivce</li>
                        <li>Privacy Policy</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-7">
                  <h5>2023 Copyright</h5>
                </div>
              </div>
            </div>
            <div className='responsive-footer'>
              <div className="footer-3">
                <div className="footer-4">
                  <div className='footer-heading'>
                    <h5>Legal</h5>
                    <ul className='footer-2-2'>
                      <li>Terms Of Serivce</li>
                      <li>Privacy Policy</li>
                    </ul>
                  </div>

                  <div className="footer-5">
                    <h5>USA </h5>
                    <h5>Your address goes there</h5>
                    <h5>+000000000</h5>
                  </div>
                  <div className="footer-6">
                    <div className="footer-6-1">
                      <h5>COOK’s Socials</h5>
                      <div className="footer-6-1-1">
                        <a href="https://www.instagram.com/"><img src={Instagram} alt="icon" /></a>
                        <a href="https://twitter.com/i/flow/login?lang=en"><img src={twitter} alt="icon" /></a>
                        <a href="https://www.facebook.com/"><img src={facebook} alt="icon" /></a>
                        <a href="https://in.linkedin.com/"><img src={linkedin} alt="icon" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-7">
                <h5>2023 ©</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
    </div >
  )
}

export default CookPage