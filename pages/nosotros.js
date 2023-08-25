import Layout from "../components/layout";
import Image from "next/image";
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title="Nosotros"
      description="Sobre nosotros, guitarLA - Tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
        <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
          <div >
            <p>
              Etiam convallis mauris sed tempus ultrices. Nullam ultrices libero
              et efficitur mattis. Integer et aliquam turpis. Mauris feugiat
              orci felis, sit amet lacinia tellus porta at. Nullam fringilla et
              lorem sit amet hendrerit. Morbi vitae mauris purus. Quisque ut
              efficitur mi, non eleifend erat. Sed eu leo id nisl scelerisque
              ullamcorper. Integer condimentum efficitur quam, a euismod dolor
              feugiat mattis. Curabitur condimentum lacus sed consectetur
              facilisis. Morbi porttitor imperdiet imperdiet. Integer volutpat
              et nisi at varius.
            </p>
            <p>
              Praesent sed eleifend elit, sodales volutpat lacus. Nunc viverra
              varius porttitor. Vestibulum ut augue diam. Aenean mollis dolor in
              iaculis tincidunt. Maecenas ultricies enim at metus imperdiet
              lacinia. Vestibulum quis nisl ut odio ornare posuere ut vitae
              eros. Vestibulum dignissim vestibulum quam. Curabitur non eleifend
              nisi. Pellentesque facilisis consectetur condimentum. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Praesent sit amet dolor dignissim, convallis
              turpis in, euismod odio.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
