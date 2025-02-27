import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEarthAsia,
  faMoneyCheck,
  faComments,
  faHandDots,
} from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  return (
 <div className='bg-gray-100'>
      <div className='bg-gray-700 mx-10 mt-3 p-2 mb-5 h-1/2 '>
        {/* <h1 className='text-center font-bold text-4xl text-orange-700 '>
          ABOUT US
        </h1> */}
        <div className='flex flex-col lg:flex-row justify-center  mx-10 rounded  mt-5'>
          <div className='w-1/2 lg:w-1/2 mt-10 '>
            <div className=' p-2 flex flex-row'>
              <div className='flex flex-wrap gap-4'>
                {/* Card 1 and 2 */}
                <div className='w-full  mb-4 lg:mb-0'>
                  <div className=' p-4 rounded-lg'>
                    <p>
                      <FontAwesomeIcon
                        icon={faEarthAsia}
                        className='text-3xl text-orange-500 mr-3'
                      />
                    </p>
                    <h2 className='mt-4 text-xl font-semibold'>
                      Fully integrated
                    </h2>
                    <p className='text-white text-lg'>
                      We get insulted by others, lose trust for those We get
                      back freezes
                    </p>
                  </div>
                </div>
                {/* Card 3 and 4 */}
                <div className='w-full mb-5 mt-10'>
                  <div className=' p-4 rounded-lg'>
                    <p>
                      <FontAwesomeIcon
                        icon={faMoneyCheck}
                        className='text-3xl text-orange-500 mr-3'
                      />
                    </p>
                    <h2 className='mt-4 text-xl font-semibold'>
                      Payments functionality
                    </h2>
                    <p className='text-white text-lg'>
                      We get insulted by others, lose trust for those We get
                      back freezes
                    </p>
                  </div>
                </div>
              </div>
              {/* Second Row */}
              <div className='flex flex-wrap mt-4 gap-4'>
                {/* Card 5 and 6 */}
                <div className='w-full ml-5 mb-4 lg:mb-0'>
                  <div className=' p-4 rounded-lg'>
                    <p>
                      <FontAwesomeIcon
                        icon={faHandDots}
                        className='text-3xl text-orange-500 mr-3'
                      />
                    </p>
                    <h2 className='text-center text-xl font-semibold'>
                      Payments functionality
                    </h2>
                    <p className='text-white text-lg'>
                      We get insulted by others, lose trust for those We get
                      back freezes
                    </p>
                  </div>
                </div>
                {/* Card 7 and 8 */}
                <div className='w-full mr-4 ml-5 '>
                  <div className=' p-4 rounded-lg'>
                    <p>
                      <FontAwesomeIcon
                        icon={faComments}
                        className='text-3xl text-orange-500 mr-3'
                      />
                    </p>
                    <h2 className='text-center text-xl font-semibold'>
                      Payments functionality
                    </h2>
                    <p className='text-white text-lg'>
                      We get insulted by others, lose trust for those We get
                      back freezes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 ml-10'>
            <div className='bg-gray-100 shadow-md p-4'>
              {/* Big card */}
              <div className='p-4 mb-4 rounded-lg'>
                <img
                  src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
                  alt='Person 1'
                  className='rounded mx-auto mb-4'
                />
                <div className='text-center'>
                  <h2 className='text-2xl font-semibold mb-2'>
                    Get Insights On Search
                  </h2>
                  <p className='text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non risus. Suspendisse lectus tortor, dignissim sit amet,
                    adipiscing nec, ultricies sed, dolor. Cras elementum
                    ultrices diam. Maecenas ligula eros, blandit nec, pulvinar
                    a, mollis accumsan, mi. Aliquam erat volutpat. Nam dui mi,
                    tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default AboutUs;
