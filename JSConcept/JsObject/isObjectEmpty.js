const isObjectEmpty = (objectName) => {
    if (typeof objectName == "undefined") {
        return true;
    } else {
        return (
            objectName &&
            Object.keys(objectName).length === 0 &&
            objectName.constructor === Object
        );
    }
};
const user = {
    name: "John",
    age: 30,
    city: "New York",
};
//let user;
console.log(isObjectEmpty(user));
