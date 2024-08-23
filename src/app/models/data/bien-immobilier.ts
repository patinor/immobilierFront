export class Proprietaire{

         nom!:string
         prenom!:string
         email!:string
         tel!:string
         adresse!:string
}

export class Categorie{
     categore!:string
     status!:string
}


export class BienImmobilier {


    titre!:string
    superficie!:string
    prix_location!:string
    image!:string
    status!:boolean
    proprietaire_id!:number
    categorie_id!:number
    categorie!:Categorie
    proprietaire!:Proprietaire
}



