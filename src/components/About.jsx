import React from 'react';
import Card from './Card';


class About extends React.Component {
  render() {
    const CardList = [
      {
        title:'Web Deveroper',
      },
      {
        title:'Javascript',
      },
      {
        title:'React'
      }

    ];
    return (
      <div className='text-gray-700 border-t border-gray-200 container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eos blanditiis odio culpa dolor excepturi praesentium repellendus
            autem pariatur, velit libero!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            At eum odio voluptas veritatis sequi quia vitae aut fugit quos,
            nostrum molestiae non recusandae enim fugiat debitis eveniet
            inventore itaque quas hic nisi aperiam ducimus quo possimus
            obcaecati. Optio minima est sapiente nulla, a consequuntur,
            tempora facilis nisi iure magnam atque aperiam quibusdam nihil.
            Quasi at, doloremque quam veniam soluta itaque, in ratione culpa
            quos, aperiam eius enim ipsum. Sequi quia dolores quibusdam enim natus voluptatem, architecto, minima nobis quod numquam iusto maxime. Dolore voluptas aut reiciendis possimus porro vero. Esse ipsam nam illo sequi laboriosam nihil perferendis, earum animi impedit!
          </p>
        </div>
        {/*/ カードのdivタグ */}
        <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid-cols-3 items-center gap-2 justify-items-center'>
          {CardList.map((CardItem) => {
            return(
              <Card
              title={CardItem.title}
              />
            )
          })}
        </div>
      </div>
    );
  }
}





export default About;