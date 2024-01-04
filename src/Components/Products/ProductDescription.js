import React from "react";
import classes from './ProuctDescription.module.css';
const ProductDescription = () => {
  return (
    <>
      <section className={classes.description}>
        <div className={classes.btn}>
          <p>description</p>
          <p>reviews(122)</p>
        </div>
        <div className={classes.info}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            iaculis tellus sed odio varius volutpat ac non tellus. Integer
            sagittis quam orci, eu dictum tortor porttitor eget. Suspendisse
            tincidunt justo dolor, nec auctor odio faucibus sed. Morbi ac nisi
            cursus, condimentum enim sit amet, molestie urna. Phasellus suscipit
            erat eu vestibulum ornare. Nulla lobortis lacus in enim fermentum
            semper. Curabitur sagittis massa ac ultricies placerat. Mauris felis
            tortor.
          </p>
          <p>
            Aenean feugiat lacus luctus, sodales mi quis, euismod ex. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Pellentesque
            posuere tristique ipsum id aliquet. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProductDescription;
