import clsx from 'clsx';
import { useState } from 'react';
import styled from 'styled-components';

const ProjectStyle = styled.div`
  background-color: #f1d4a5;
`;

const ARRAY_PROJECTS = [
  {
    img: '/assets/img-project-1.png',
    title: 'Cvfree',
    description: 'Free online curriculum vitae',
    tech: 'react typescript tailwind recoil node express mongodb',
    github: 'https://github.com/autoclickvn/cvfree',
    imgDemo: '/assets/project/img-demo-cvfree.png',
    linkDemo: 'http://cvfree.top',
  },
  {
    img: '/assets/img-project-3.png',
    title: 'Cvfree App',
    description: 'Free online curriculum vitae on mobile app',
    tech: 'react react-native typescript redux formik',
    github: 'https://github.com/autoclickvn/cvfree-mobile-app',
    imgDemo: '/assets/project/img-demo-cvfree-mobile.png',
    linkDemo: 'https://youtube.com',
  },
  {
    img: '/assets/img-project-3.png',
    title: 'CMS Base',
    description: 'A basic CMS framework',
    tech: 'react tailwind typescript redux formik',
    github: 'https://github.com/autoclickvn/cms-base',
    imgDemo: '/assets/project/img-demo-cms-base.png',
    linkDemo: 'https://base-cms.herokuapp.com',
  },
  {
    img: '/assets/img-project-4.png',
    title: 'Galaxy Utility',
    description: 'A repository of utility functions',
    tech: 'typescript npm',
    github: 'https://github.com/autoclickvn/galaxy-utility',
    imgDemo: '/assets/project/img-demo-galaxy-utility.png',
    linkDemo: 'https://www.npmjs.com/package/galaxy-utility',
  },
  {
    img: '/assets/img-project-1.png',
    title: 'Weather',
    description: 'See Vietnam weather with weather web app',
    tech: 'react css',
    github: 'https://github.com/autoclickvn/weather-app',
    imgDemo: '/assets/project/img-demo-weather.png',
    linkDemo: 'https://vn-weather.herokuapp.com',
  },
  {
    img: '/assets/img-project-3.png',
    title: 'Cards Game',
    description: 'Tien Len Mien Bac',
    tech: 'react bootstrap antdesign ',
    github: 'https://github.com/autoclickvn/cards-game',
    imgDemo: '/assets/project/img-demo-cards-game.png',
    linkDemo: 'https://tienlenmienbac.herokuapp.com',
  },
];

export const Project: React.FC = () => {
  const [showProject, setShowProject] = useState<number>(0);

  return (
    <ProjectStyle className="h-full">
      <div className="relative">
        <img src={`${process.env.PUBLIC_URL}/assets/img-top-project.png`} alt="top project" className="w-full h-52" />
        <img
          src={`${process.env.PUBLIC_URL}/assets/img-label-project.png`}
          alt="top project"
          className="absolute top-20 left-5 h-40"
        />
      </div>

      <div className="pb-5 px-20 mt-16">
        <div className="grid grid-cols-2 gap-x-20 gap-y-7">
          {ARRAY_PROJECTS.map((item, index) => {
            return (
              <div
                onClick={() => setShowProject(index + 1)}
                key={item.title}
                className="col-span-1 flex flex-col items-center cursor-pointer transform duration-300 hover:scale-125 opacity-90 hover:opacity-100"
              >
                <img
                  src={`${process.env.PUBLIC_URL}${item.img}`}
                  className={clsx({
                    'block h-28': true,
                    'w-36': index === 1 || index === 2 || index === 5,
                    'w-32': index === 0 || index === 3 || index === 4,
                  })}
                  alt={item.title}
                />
                <label
                  className={clsx({
                    'block font-bold whitespace-nowrap uppercase': true,
                    'text-green-500': index === 1 || index === 2 || index === 5,
                    'text-yellow-500': index === 0 || index === 3 || index === 4,
                  })}
                >
                  {item.title}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/assets/img-bottom-project-2.png`}
        className="w-16 absolute bottom-3 left-3 opacity-50"
        alt="umbrella"
      />

      <img
        src={`${process.env.PUBLIC_URL}/assets/img-bottom-project-3.png`}
        className="absolute w-16 bottom-5 right-3 opacity-30"
        alt="umbrella"
      />

      <img
        src={`${process.env.PUBLIC_URL}/assets/img-bottom-project-4.png`}
        className="w-14 h-14 absolute top-44 right-3 opacity-50"
        alt="umbrella"
      />

      {showProject !== 0 && (
        <div className="fixed top-20 right-20 z-40 px-20 py-10">
          <div className="bg-gradient-to-r from-yellow-300 to-green-400 p-4 rounded-xl flex items-center justify-center relative">
            <button className="absolute -top-3 -right-4 outline-none" onClick={() => setShowProject(0)}>
              <img src={`${process.env.PUBLIC_URL}/assets/img-close-modal.png`} className="w-10" alt="close" />
            </button>
            <div className="bg-white py-10 px-20" style={{ width: 700 }}>
              <div className="flex justify-center items-center flex-col">
                <label className="uppercase font-bold text-2xl">{ARRAY_PROJECTS[showProject - 1].title}</label>
                <span className="block mt-2 italic font-medium text-gray-400">
                  {ARRAY_PROJECTS[showProject - 1].description}
                </span>
              </div>
              <div className="flex justify-center mt-7">
                <img
                  src={ARRAY_PROJECTS[showProject - 1].imgDemo}
                  className="h-60 w-auto border-2 rounded-md shadow"
                  alt={ARRAY_PROJECTS[showProject - 1].title}
                />
              </div>
              <div className="flex items-center justify-start mt-5">
                <div className="flex items-center">
                  <span className="block font-semibold mr-3 whitespace-nowrap">Tech used:</span>
                  {ARRAY_PROJECTS[showProject - 1].tech.split(' ').map((item) => {
                    return (
                      <div>
                        <img
                          title={item}
                          src={`${process.env.PUBLIC_URL}/assets/logo/img-logo-${item}.png`}
                          className="w-10 mx-5"
                          alt={item}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-5 flex justify-start">
                <span className="block font-semibold mr-3 whitespace-nowrap">Demo:</span>
                <a
                  href={ARRAY_PROJECTS[showProject - 1].linkDemo}
                  target="_blank"
                  className="block text-blue-500 hover:text-blue-600 font-medium"
                  rel="noopener noreferrer"
                >
                  {ARRAY_PROJECTS[showProject - 1].linkDemo}
                </a>
              </div>
              <div className="mt-5 flex justify-start">
                <span className="block font-semibold mr-3 whitespace-nowrap">Github:</span>
                <a
                  href={ARRAY_PROJECTS[showProject - 1].github}
                  target="_blank"
                  className="block text-blue-500 hover:text-blue-600 font-medium"
                  rel="noopener noreferrer"
                >
                  {ARRAY_PROJECTS[showProject - 1].github}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </ProjectStyle>
  );
};
