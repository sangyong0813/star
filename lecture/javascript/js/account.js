function Account(owner, accNum, balance) {
  // 객체 속성 부여
  this.owner = owner;
  this.accNum = accNum;
  this.balance = balance;
  this.name = "직장인 비과세 예금";
  this.bankName = "우리은행";

  // 객체 기능 부여
  this.checkBalance = function () {
    // 잔액조회
    return this.balance;
  };

  this.deposit = function (money) {
    // 저축
    this.balance += money;
  };

  this.withDraw = function (money) {
    if (this.balance >= money) {
      this.balance -= money;
    } else {
      window.alert("잔액이 부족합니다!");
    }
  };
}
