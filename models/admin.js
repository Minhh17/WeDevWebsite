const db = require("../util/database");

module.exports = class Lecturer {
  constructor(
    admin_id,
    first_name,
    last_name,
    phone,
    address,
    avatar,
    email,
    dob
  ) {
    this.admin_id = admin_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
    this.address = address;
    this.avatar = avatar;
    this.email = email;
    this.dob = dob;
  }

  static async getAllAdmins() {
    try {
      const [rows, fields] = await db.execute(
        "SELECT * FROM english_center.admin"
      );

      // load data from database
      const admins = [];
      for (const admin of rows) {
        admins.push(
          new Lecturer(
            admin.admin_id,
            admin.first_name,
            admin.last_name,
            admin.phone,
            admin.address,
            admin.avatar,
            admin.email,
            admin.dob
          )
        );
      }
      return admins;
    } catch (err) {
      throw err;
    }
  }

  static async addAdmin(admin) {
    try {
      const result = await db.execute(
        "INSERT INTO english_center.admin (admin_id, first_name, last_name, phone, address, avatar, email, dob) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          admin.admin_id,
          admin.first_name,
          admin.last_name,
          admin.phone,
          admin.address,
          admin.avatar,
          admin.email,
          admin.dob,
        ]
      );
      return result;
    } catch (err) {
      throw err;
    }
  }
};
