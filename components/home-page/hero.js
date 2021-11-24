import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/harry.jpg"
          alt="My image"
          width={300}
          height={400}
        />
      </div>
      <h1> Hi, I'm Harry</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores
        quas sapiente mollitia quis facilis dolorum perferendis saepe
        necessitatibus animi?
      </p>
    </section>
  );
}
export default Hero;
