// class クラスネームで class を作成する
class Human {
  // constructor はクラスからインスタンスを作成した時に実行される
  constructor(name, age) {
    // this は作成されたインスタンスを指す
    this.name = name;
    this.age = age;
  }

  // クラスメソッド
  // クラスが持つファンクションのこと
  callMyProfile() {
    // 自分自身の値を参照するためにここでも this を使う
    console.log(this.name, this.age);
  }
}

const Nakanishi = new Human("Nakanishi", 17);
//console.log(Nakanishi);
const Tanaka = new Human("Tanaka", 17);
//console.log(Tanaka);
Nakanishi.callMyProfile();
