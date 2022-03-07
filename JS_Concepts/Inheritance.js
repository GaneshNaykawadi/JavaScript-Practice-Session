class Family {
  constructor(surname, address) {
    this.surname = surname;
    this.address = address;
  }

  familyInfo(name, age, gender) {
    alert(
      `My Name is ${name} ${this.surname}. My Age is ${age} and my gender is ${gender}.`
    );
  }
  getAddress() {
    alert(`I lives in ${this.address}`);
  }
}

class Baban extends Family {
  myInfo() {
    alert('I am Father');
  }
}

class Sulabha extends Family {
  myInfo() {
    alert('I am Mother');
  }
}

class Ganesh extends Family {
  myInfo() {
    alert('I am Son');
  }
}

// let b = new Baban("Naykawadi", "Karad");
// b.familyInfo('Baban', 68, 'Male');
// b.myInfo();
// b.getAddress();

// let g = new Ganesh("Naykawadi", "Pune");
// g.familyInfo('Ganesh', 27, 'Male');
// g.myInfo();
// g.getAddress();

let s = new Sulabha('Naykawadi', 'Karad');
s.familyInfo('Sulabha', 60, 'Female');
s.myInfo();
s.getAddress();
