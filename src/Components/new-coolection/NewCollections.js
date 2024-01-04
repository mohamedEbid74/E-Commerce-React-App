import React from 'react'
import new_collections from '../../Assets/new_collections';
import classes from './NewCollections.module.css'
const NewCollections = () => {
  return (
    <>
      <section className={classes.collections}>
        <h1>new collections</h1>
          <h4>hover to see details</h4>
        <div className={classes.collection_box}>
          <ul>
            {new_collections.map((item)=>{
              return(
                <li key={item.id}>
                  <div className={classes.image}>
                    <img src={item.image} alt=''/>
                  </div>
                  <div className={classes.desc}>
                  <h3 className={classes.title}>{item.name}</h3>
                  <div className={classes.price}>
                    <p className={classes.new_price}>${item.new_price}</p>
                    <p className={classes.old_price}>${item.old_price}</p>
                  </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export default NewCollections
