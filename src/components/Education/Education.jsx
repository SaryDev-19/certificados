import React, { useState } from "react";
import "./Education.css";
import { useNavigate } from "react-router-dom";

function Education() {
  const navigate = useNavigate();
  const [Open, setOpen] = useState(false);
  const [Image, setImage] = useState();
  const handleClick = () => {
    navigate("/experiences");
  };

  const handleDiplomaClick = (value) => {
    switch (value) {
      case 0:
        const diplomCarrer ="../../../images/diploma0.jpg"
        setImage(diplomCarrer);
        setOpen(true);
       break;
      case 1:
        const diploma1 = "../../../images/diploma1.jpg";
        setImage(diploma1);
        setOpen(true);
        break;

      case 2:
        const diploma2 = "../../../images/diploma2.jpg";
        setImage(diploma2);
        setOpen(true);
        break;

      case 3:
        const diploma3 = "../../../images/diploma3.jpg";
        setImage(diploma3);
        setOpen(true);
        break;

      case 4:
        const diploma4 = "../../../images/diploma4.jpg";
        setImage(diploma4);
        setOpen(true);
        break;

      case 5:
        const diploma5 = "../../../images/diploma5.jpg";
        setImage(diploma5);
        setOpen(true);
        break;

      case 6:
        const diploma6 = "../../../images/diploma6.jpg";
        setImage(diploma6);
        setOpen(true);
        break;

      case 7:
        const diploma7 = "../../../images/diploma7.jpg";
        setImage(diploma7);
        setOpen(true);
        break;  

      default:
        break;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="Education">
      <article className="Education__container">
        <div className="Education__container-carrer">
          <figure>
            <img src="../../../images/graduacion.png" alt="" />
          </figure>
          <div className="Diplo_fondo">
            <h2>Diploma de la carrera</h2>
            <button onClick={() => handleDiplomaClick(0)}>Ver</button>
          </div>
        </div>

        <hr />

        <article className="Education__container-diplomas">
          <div>
            <div className="Diplo_fondo">
              <h1>English level 1</h1>
              <button onClick={() => handleDiplomaClick(1)}>Ver</button>
            </div>
          </div>

          <div>
            <div className="Diplo_fondo">
              <h1>English level 2</h1>
              <button onClick={() => handleDiplomaClick(2)}>Ver</button>
            </div>
          </div>

          <div>
            <div className="Diplo_fondo">
              <h1>English level 3</h1>
              <button onClick={() => handleDiplomaClick(3)}>Ver</button>
            </div>
          </div>

          <div>
            <div className="Diplo_fondo">
              <h1>English level 4</h1>
              <button onClick={() => handleDiplomaClick(4)}>Ver</button>
            </div>
          </div>

          <div>
            <div className="Diplo_fondo">
              <h1>English level 5</h1>
              <button onClick={() => handleDiplomaClick(5)}>Ver</button>
            </div>
          </div>

          <div>
            <div className="Diplo_fondo">
              <h1>English level 6</h1>
              <button onClick={() => handleDiplomaClick(6)}>Ver</button>
            </div>
          </div>

          <div>
            <div className="Diplo_fondo">
              <h1>English level 7</h1>
              <button onClick={() => handleDiplomaClick(7)}>Ver</button>
            </div>
          </div>
        </article>
      </article>

      <article className={Open ? "Education__image" : "Education__image-close"}>
        <div onClick={handleClose}>
          <i class="bx bx-x"></i>
        </div>
        <img src={Image} alt="" />
      </article>
    </section>
  );
}

export default Education;
