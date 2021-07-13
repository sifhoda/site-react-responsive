


const french = {
    first : {
        title : "Nous connaître",
        subtitles : ['Mot de la présidente', 'Biographie Abdelkader Bensalah' , 'Notre identité' , 'Gouvernance' , 'Notre equipe'],
        links : ['#','#','#','#','#']
    },
    second : {
        title : "Axes d’intervention"
    },
    third : {
        title : "Programmes",
        subtitles : ['Dar-Libtikar', 'Wechange', 'Academy', 'TADAMOUN', 'Galerie de projets'],
        links : ['#','#','#','#','#']
    },
    fourth : {
        title : "Publications",
        subtitles : ['Etudes de Cas', 'Rapports & Guides', 'Infographies','Vidéos'],
        links : ['#','#','#','#']
    },
    fifth : {
        title : "Actualités"
    },
    sixth : {
        title : "Blog"
    },
    link : 'logo.png'
}


const arabic = {
    first : {
        title : "للتعرّف علينا",
        subtitles : ['كلمة الرئيسة', 'السيرة الذاتية لعبد القادر بنصالح' , 'هويتنا' , 'مجلس الإدارة' , 'فريقنا'],
        links : ['#','#','#','#','#']
    },
    second : {
        title : "مجالات التدخل"
    },
    third : {
        title : "برامجنا",
        subtitles : ['دار الإبتكار', 'Wechange', 'Academy', 'تضامن', 'مشاريعنا'],
        links : ['#','#','#','#','#']
    },
    fourth : {
        title : "اصدارات",
        subtitles : ['تقارير و دلائل', 'دراسة حالات', 'رسوم بيانية','فيديو'],
        links : ['#','#','#','#']
    },
    fifth : {
        title : "أخبار"
    },
    sixth : {
        title : "مدونة"
    },
    link : 'logo2.jpg'
}


export const getMenuArabic = () => {
    return  arabic;
}

export const getMenuFrench = () => {
    return  french;
}
