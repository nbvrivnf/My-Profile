import React from "react";



class Card extends React.Component {
  render() {
    return (
      <div className="bg-gray-200 rounded-lg py-4 px-4 w-80 m-auto ">
        <div className="flex gap-3 mb-5">
          <svg className='w-5 ' fill="#000000" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 14.1249 33.8360 C 13.2109 33.8360 12.4374 33.1328 12.4374 32.3125 C 12.4374 31.9609 12.5780 31.5860 12.8593 31.2344 L 20.6405 21.3906 C 21.1327 20.7813 21.6483 20.5234 22.1640 20.5234 C 22.5858 20.5234 23.0077 20.6406 23.4530 20.8984 L 33.8358 26.4531 L 40.9140 22.3516 C 41.2655 22.1640 41.6405 22.0469 41.9687 22.0469 C 42.8827 22.0469 43.5624 22.7500 43.5624 23.5703 C 43.5624 23.9687 43.4452 24.2969 43.1405 24.6719 L 35.3827 34.5156 C 34.9140 35.1484 34.3983 35.3828 33.8124 35.3828 C 33.4374 35.3828 33.0155 35.2422 32.5468 35.0078 L 22.1874 29.4531 L 15.1093 33.5313 C 14.7577 33.7422 14.4530 33.8360 14.1249 33.8360 Z" /></svg>
          <h1 className="text-lg font-medium">{this.props.title}</h1>
        </div>
        <p className='mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat ex laudantium sequi ratione nesciunt, eveniet sed quia minus quibusdam.</p>
        <a href="#" className="border-b-4 border-green-300 text-green-500">show more→</a>
      </div>
    );
  }
}


export default Card;