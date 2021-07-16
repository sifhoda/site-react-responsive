import React from 'react'
import "../styles/Biographie.css";


function Biographie() {

    const image = "Latifa-Bensalah-2-1.jpg";

    return (
        <div className="biographie">
            <div className="biographie__left">
                <div className="imgcontainer">
                    <img src={process.env.PUBLIC_URL + '/images/' + image} />
                </div>
                <div className="biographie__info">
                    <h6>Madame Latifa BENSALAH EL MOUTARAJJI</h6>
                    <p>Présidente</p>
                </div>
            </div>
            <div className="biographie__right">
                <div className="biographie__title">
                 Poursuivre l’œuvre de Feu Abdelkader BENSALAH
                </div>
                <div className="biographie__content">
                Notre Fondation a été créée en juillet 2000 avec l’objectif de perpétuer l’œuvre d’Abdelkader Bensalah, fondateur du Groupe Holmarcom. Entrepreneur engagé, il avait foi en l’Homme et luttait contre toutes les formes de précarité, en soutenant notamment les plus démunis. C’est donc en sa mémoire que ses successeurs ont tenu à pérenniser et développer ce fort engagement social et sociétal. Ainsi, la Fondation Abdelkader Bensalah, reconnue d’utilité publique depuis 2016, accompagne de nombreux projets à travers le Royaume pour lutter contre la marginalisation et la pauvreté, dans le sillage de l’Initiative Nationale pour le Développement Humain (INDH), lancée par Sa Majesté le Roi Mohammed VI que Dieu le glorifie. Aujourd’hui, vingt ans après sa naissance, la Fondation fait évoluer sa démarche et s’engage résolument pour l’innovation sociale. Cette approche, qui privilégie l’autonomisation, l’ancrage territorial et la co-construction nous apparaît comme un véritable levier de progrès social pour le Maroc. En parcourant notre site, vous découvrirez les actions que nous menons avec nos partenaires, mais aussi les solutions que nous soutenons afin d’avoir un réel impact sur le terrain. A travers la présentation de ces projets et la publication de nos travaux, nous souhaitons contribuer à l’essor de l’innovation sociale, tout en offrant un espace d’échanges pour l’ensemble des acteurs du développement humain. Merci pour votre intérêt et bonne visite !
                </div>
            </div>
            <div className="biographie__extend">
                <h6>Madame Latifa BENSALAH EL MOUTARAJJI</h6>
            </div>
        </div>
    )
}

export default Biographie
