const Caroline = {
    name: "Caroline",
    dob: 2004,
    graduated: false, 
    age: function(){
        console.log(this);
        return 2020 - this.dob;
    }
};
