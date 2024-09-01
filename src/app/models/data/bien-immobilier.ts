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

     id!:number
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


export class Client {

    id!:number
    nom!:string
    prenom!:string
    email!:string
    piece_identite!:string
    tel!:string
    adresse!:string
    password!:string

}



