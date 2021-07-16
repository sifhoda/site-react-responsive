import React from 'react'
import HeaderInfo from './HeaderInfo';
import Biographie from './Biographie';

function PageExemple() {

    const breadcrumbarr = ['Acceuil', 'Mot de la présidente'];
    return (
        <>
            <HeaderInfo text="MOT DE LA PRÉSIDENTE" breadcrumb={breadcrumbarr}/>
            <Biographie />
        </>
    )
}

export default PageExemple
