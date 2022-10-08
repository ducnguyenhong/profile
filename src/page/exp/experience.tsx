import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { ARRAY_EXP } from './experience.data';
import { ExpStyle } from './experience.style';

const Experience: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  const { t } = useTranslation();

  return (
    <ExpStyle
      className={clsx({
        'fixed z-20 overflow-y-auto h-screen lg:overflow-hidden bg-no-repeat bg-cover top-0 right-0 opacity-90 duration-500':
          true,
        'w-2/3  lg:w-1/2 xl:w-1/3': isShow,
        'w-0': !isShow,
      })}
    >
      {isShow && (
        <div className="content pb-10 lg:pb-0 h-auto bg-no-repeat bg-cover">
          <div className="z-50 pt-40 left-0 w-full h-full 2xl:pt-80">
            <div className="px-10 mt-10 relative">
              {ARRAY_EXP.map((item, index) => {
                const { workplace, time, position, icon, url } = item;
                return (
                  <div key={`exp_${time}`} className="grid grid-cols-5 2xl:grid-cols-4">
                    <div
                      className={clsx({
                        'col-span-2 relative z-40': true,
                        'h-28': ARRAY_EXP.length !== index + 1,
                      })}
                    >
                      <span className="block font-semibold text-gray-600 text-lg text-right pr-10">{time}</span>
                      <div className="absolute -top-2 -right-8 2xl:-right-10">
                        <img src={`${process.env.PUBLIC_URL}${icon}`} alt="ic" className="w-10" />
                      </div>
                    </div>
                    <div className="col-span-3 ml-16 2xl:ml-20 2xl:col-span-2">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-lg block text-gray-600 duration-300 hover:underline"
                      >
                        {t(workplace)}
                      </a>
                      <span className="block text-gray-600">{position}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </ExpStyle>
  );
};

export default Experience;
