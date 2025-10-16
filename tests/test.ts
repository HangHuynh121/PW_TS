type User = {
    id: number;
    userName: string;
    email: string

}

const userProfile: User = {
    id: 101,
    userName: 'Hang',
    email: "An@gmail.com"
}

//destructuring

const { id, userName } = userProfile
console.log(id);
console.log(userName)

