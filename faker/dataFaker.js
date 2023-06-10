const {faker} = require("@faker-js/faker")

exports.generateFake=(item)=>{
    switch (item) {
        case 'company-name':
            return faker.company.name()+" "+"bank";
    
        default:
            break;
    }
}