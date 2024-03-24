import './Navbar.css';
import './Header.css'

const Banner = () => {
    return (
        <section className='mb-[64px] rounded-3xl mt-8 font text-shadow-lg'>
            <div className="container2 mx-auto h-[55vh] lg:h-[85vh]">
                <div className="carousel w-full h-full relative">
                    <div id="slide1" className="carousel-item relative w-full h-full bg-left">
                        <img src="https://img.freepik.com/free-photo/portrait-handsome-bearded-man-chief-cook-holding-saucepan-make-okay-sign_496169-87.jpg?w=740&t=st=1710529527~exp=1710530127~hmac=e765a643b706072db1173fa1c6bccb6495eebe74d07db36329cb9725583b4ed8" className="w-full h-full bg-top object-cover rounded-3xl" alt="Banner" />
                        <div className="overlay absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 to-transparent"></div>
                        <div className="text-container absolute bottom-[10%] left-0 w-full text-white text-center lg:bottom-[25%] ">
                            <div><h2 className="text-[22px] text-center lg:text-[56px] font-bold">Embark on a personalized culinary journey in restaurant-style ambiance!</h2></div>
                            <div><p className='text-gray-200 text-[13px] lg:text-[16px]'>Discover the perfect blend of taste and atmosphere on our restaurant's website, where you can explore our menu and make reservations effortlessly by visiting our website, where you can explore our menu and book your table online</p></div>
                            <div className=' flex items-center space-x-6 mx-auto justify-center pt-4'>
                                <button className='btn font-medium btn-success rounded-full'>Explore Now</button>
                                <button className='btn bg-transparent rounded-full text-white'>Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto container2 items-center text-center flex justify-center flex-col pt-12'>
                <h1 className='text-[24px] lg:text-[36px] capitalize font-semibold'>Our delicious recipes</h1>
                <p className='max-w-[85%] text-[13px] items-center text-gray-500  text-center pt-1 lg:text-[16px]'>Discover our mouthwatering recipes, crafted with care and passion, for an unforgettable culinary experience.Experience our delectable, exquisite, and tantalizing recipes.</p>
            </div>
        </section>

    )
}

export default Banner;
