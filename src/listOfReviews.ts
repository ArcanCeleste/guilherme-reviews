export type Review = {
    id: number,
    image: string,
    name: string,
    occupation: string,
    description:string
}

export const listOfReviews:Review[] = [
    {
        id: 0,
        image: "https://media-exp1.licdn.com/dms/image/C4E03AQG7S2oXKemYmQ/profile-displayphoto-shrink_800_800/0/1664117344226?e=1672876800&v=beta&t=U6z4AXuD-uj-iE0-Kr6Ivml573XPvlBO8piT4tQVqLA",
        name: "Guilherme de Paula da Silva",
        occupation: "Programmer",
        description: "Olá, meu nome é Guilherme de Paula da Silva e eu estou estudando para ser um programador, as tecnologias que eu estou aprendendo são: HTML, CSS, JavaScript, TypeScript e React. Tenho 19 Anos e estou a procura do meu primeiro emprego."
    },
    {
        id: 1,
        name: "Susan Smith",
        occupation: "Web Developer",
        description: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
    },
    {
        id: 2,
        name: "Anna Johnson",
        occupation: "Web Developer",
        description: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
    },
    {
        id: 3,
        name: "Peter Jones",
        occupation: "Intern",
        description: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    },
    {
        id: 4,
        name: "Bill Anderson",
        occupation: "Boss",
        description: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
    }
]