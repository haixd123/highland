// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'user',
//   password: 'password',
//   database: 'test'
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL Server!');
// });

// const { Sequelize } = require('sequelize');
// const express = require('express');
// const cors = require('cors')
// const bodyParser = require('body-parser');


// const app = express();

// app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('productmanagement', 'root', null, {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// let connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// app.route('/product')
//   .get(function (req, res) {
//     let sql = 'SELECT * FROM Product'
//     sequelize.query(sql, (err, response) => {
//       if (err) {
//         res.send({ status: 'error', message: err })
//       } else {
//         res.send({ status: 'success', data: response });
//       }
//     })
//   })
//   .post(function (req, res) {
//     let sql = `INSERT INTO Product SET ?`
//     const { body } = req;
//     if (!body.ProductId) {
//       res.status(400).send({ status: 'error', message: 'Dữ liệu đầu vào không tồn tại.' })
//     } else {
//       sequelize.query(sql, body, function (err) {
//         if (err) {
//           res.send({ status: 'error', message: err })
//         } else {
//           res.send({ status: 'success', data: body });
//         }
//       })
//     }
//   });

// app.route('/product/:productId')
//   .get(function (req, res) {
//     const { productId } = req.params;
//     let sql = 'SELECT * FROM Product WHERE ProductId = ?'
//     sequelize.query(sql, productId, (err, response) => {
//       if (err) throw err;
//       const data = response && Array.isArray(response) ? response.find(el => el.ProductId == productId) : null;
//       if (data) {
//         res.send({ status: 'success', data: data });
//       } else {
//         res.send({ status: 'error', message: 'ProductId không tồn tại.' })
//       }
//     })
//   })
//   .put(function (req, res) {
//     let sql = `UPDATE Product 
//               SET ?
//               WHERE ProductId = ?`;
//     const { body, params } = req;
//     const { productId } = params;
//     if (!body.ProductId) {
//       res.status(400).send({ status: 'error', message: 'ProductId vào không tồn tại.' })
//     } else {
//       sequelize.query(sql, [body, productId], function (err) {
//         if (err) {
//           res.send({ status: 'error', message: err })
//         } else {
//           res.send({ status: 'success', data: body });
//         }
//       })
//     }
//   })
//   .delete(function (req, res) {
//     const { productId } = req.params;
//     let sql = `DELETE FROM Product WHERE ProductId = ? `;
//     sequelize.query(sql, productId, function (err) {
//       if (err) {
//         res.send({ status: 'error', message: err })
//       } else {
//         res.send({ status: 'success', data: productId });
//       }
//     })
//   });

// // CATEGORY
// app.route('/category')
//   .get(function (req, res) {
//     let sql = 'SELECT * FROM Category'
//     sequelize.query(sql, (err, response) => {
//       if (err) {
//         res.send({ status: 'error', message: err })
//       } else {
//         res.send({ status: 'success', data: response });
//       }
//     })
//   })
//   .post(function (req, res) {
//     let sql = `INSERT INTO Category SET ?`
//     const { body } = req;
//     if (!body.CategoryId) {
//       res.status(400).send({ status: 'error', message: 'Dữ liệu đầu vào không tồn tại.' })
//     } else {
//       sequelize.query(sql, body, function (err) {
//         if (err) {
//           res.send({ status: 'error', message: err })
//         } else {
//           res.send({ status: 'success', data: body });
//         }
//       })
//     }
//   });

// app.route('/category/:categoryId')
//   .get(function (req, res) {
//     const { categoryId } = req.params;
//     let sql = 'SELECT * FROM Category WHERE CategoryId = ?'
//     sequelize.query(sql, categoryId, (err, response) => {
//       if (err) throw err;
//       const data = response && Array.isArray(response) ? response.find(el => el.CategoryId == categoryId) : null;
//       if (data) {
//         res.send({ status: 'success', data: data });
//       } else {
//         res.send({ status: 'error', message: 'CategoryId không tồn tại.' })
//       }
//     })
//   })
//   .put(function (req, res) {
//     let sql = `UPDATE Category 
//               SET ?
//               WHERE CategoryId = ?`;
//     const { body, params } = req;
//     const { categoryId } = params;
//     if (!body.CategoryId) {
//       res.status(400).send({ status: 'error', message: 'CategoryId vào không tồn tại.' })
//     } else {
//       sequelize.query(sql, [body, categoryId], function (err) {
//         if (err) {
//           res.send({ status: 'error', message: err })
//         } else {
//           res.send({ status: 'success', data: body });
//         }
//       })
//     }
//   })
//   .delete(function (req, res) {
//     const { categoryId } = req.params;
//     let sql = `DELETE FROM Category WHERE CategoryId = ? `;
//     sequelize.query(sql, categoryId, function (err) {
//       if (err) {
//         res.send({ status: 'error', message: err })
//       } else {
//         res.send({ status: 'success', data: categoryId });
//       }
//     })
//   });

// // Manufacturer
// app.route('/manufacturer')
//   .get(function (req, res) {
//     let sql = 'SELECT * FROM Manufacturer'
//     sequelize.query(sql, (err, response) => {
//       if (err) {
//         res.send({ status: 'error', message: err })
//       } else {
//         res.send({ status: 'success', data: response });
//       }
//     })
//   })
//   .post(function (req, res) {
//     let sql = `INSERT INTO Manufacturer SET ?`
//     const { body } = req;
//     if (!body.ManufacturerId) {
//       res.status(400).send({ status: 'error', message: 'Dữ liệu đầu vào không tồn tại.' })
//     } else {
//       sequelize.query(sql, body, function (err) {
//         if (err) {
//           res.send({ status: 'error', message: err })
//         } else {
//           res.send({ status: 'success', data: body });
//         }
//       })
//     }
//   });

// app.route('/manufacturer/:manufacturerId')
//   .get(function (req, res) {
//     const { manufacturerId } = req.params;
//     let sql = 'SELECT * FROM Manufacturer WHERE ManufacturerId = ?'
//     sequelize.query(sql, manufacturerId, (err, response) => {
//       if (err) throw err;
//       const data = response && Array.isArray(response) ? response.find(el => el.ManufacturerId == manufacturerId) : null;
//       if (data) {
//         res.send({ status: 'success', data: data });
//       } else {
//         res.send({ status: 'error', message: 'ManufacturerId không tồn tại.' })
//       }
//     })
//   })
//   .put(function (req, res) {
//     let sql = `UPDATE Manufacturer 
//               SET ?
//               WHERE ManufacturerId = ?`;
//     const { body, params } = req;
//     const { manufacturerId } = params;
//     if (!body.ManufacturerId) {
//       res.status(400).send({ status: 'error', message: 'ManufacturerId vào không tồn tại.' })
//     } else {
//       sequelize.query(sql, [body, manufacturerId], function (err) {
//         if (err) {
//           res.send({ status: 'error', message: err })
//         } else {
//           res.send({ status: 'success', data: body });
//         }
//       })
//     }
//   })
//   .delete(function (req, res) {
//     const { manufacturerId } = req.params;
//     let sql = `DELETE FROM Manufacturer WHERE ManufacturerId = ? `;
//     sequelize.query(sql, manufacturerId, function (err) {
//       if (err) {
//         res.send({ status: 'error', message: err })
//       } else {
//         res.send({ status: 'success', data: manufacturerId });
//       }
//     })
//   });
// // Account
// app.route('/account')
//   .get(function (req, res) {
//     let sql = 'SELECT * FROM Account'
//     sequelize.query(sql, (err, response) => {
//       if (err) {
//         res.send({ status: 'error', message: err })
//       } else {
//         res.send({ status: 'success', data: response });
//       }
//     })
//   })
//   .post(function (req, res) {
//     let sql = `INSERT INTO Account SET ?`
//     const { body } = req;
//     if (!body.AccountID) {
//       res.status(400).send({ status: 'error', message: 'Dữ liệu đầu vào không tồn tại.' })
//     } else {
//       sequelize.query(sql, body, function (err) {
//         if (err) {
//           res.send({ status: 'error', message: err })
//         } else {
//           res.send({ status: 'success', data: body });
//         }
//       })
//     }
//   });

// app.route('/account/:accountId')
//   .get(function (req, res) {
//     const { accountId } = req.params;
//     let sql = 'SELECT * FROM Account WHERE AccountID = ?'
//     sequelize.query(sql, accountId, (err, response) => {
//       if (err) throw err;
//       const data = response && Array.isArray(response) ? response.find(el => el.AccountID == accountId) : null;
//       if (data) {
//         res.send({ status: 'success', data: data });
//       } else {
//         res.send({ status: 'error', message: 'AccountID không tồn tại.' })
//       }
//     })
//   })
//   .put(function (req, res) {
//     let sql = `UPDATE Account 
//               SET ?
//               WHERE AccountID = ?`;
//     const { body, params } = req;
//     const { accountId } = params;
//     if (!body.AccountID) {
//       res.status(400).send({ status: 'error', message: 'AccountID vào không tồn tại.' })
//     } else {
//       sequelize.query(sql, [body, accountId], function (err) {
//         if (err) {
//           res.send({ status: 'error', message: err })
//         } else {
//           res.send({ status: 'success', data: body });
//         }
//       })
//     }
//   })
//   .delete(function (req, res) {
//     const { accountId } = req.params;
//     let sql = `DELETE FROM Account WHERE AccountID = ? `;
//     sequelize.query(sql, accountId, function (err) {
//       if (err) {
//         res.send({ status: 'error', message: err })
//       } else {
//         res.send({ status: 'success', data: accountId });
//       }
//     })
//   });




// module.exports = connectDB


const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 8888;
const cors = require('cors')

app.use(cors())
// connect mysql
const con = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: null,
  database: "ProductManagement"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!!")
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// PRODUCT
app.route('/product')
  .get(function (req, res) {
    let sql = 'SELECT * FROM Product'
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: 'error', message: err })
      } else {
        res.send({ status: 'success', data: response });
      }
    })
  })
  .post(function (req, res) {
    let sql = `INSERT INTO Product SET ?`
    const { body } = req;
    if (!body.ProductId) {
      res.status(400).send({ status: 'error', message: 'Dữ liệu đầu vào không tồn tại.' })
    } else {
      con.query(sql, body, function (err) {
        if (err) {
          res.send({ status: 'error', message: err })
        } else {
          res.send({ status: 'success', data: body });
        }
      })
    }
  });
  

app.route('/product/:productId')
  .get(function (req, res) {
    const { productId } = req.params;
    let sql = 'SELECT * FROM Product WHERE ProductId = ?'
    con.query(sql, productId, (err, response) => {
      if (err) throw err;
      const data = response && Array.isArray(response) ? response.find(el => el.ProductId == productId) : null;
      if (data) {
        res.send({ status: 'success', data: data });
      } else {
        res.send({ status: 'error', message: 'ProductId không tồn tại.' })
      }
    })
  })
  .put(function (req, res) {
    let sql = `UPDATE Product 
              SET ?
              WHERE ProductId = ?`;
    const { body, params } = req;
    const { productId } = params;
    if (!body.ProductId) {
      res.status(400).send({ status: 'error', message: 'ProductId vào không tồn tại.' })
    } else {
      con.query(sql, [body, productId], function (err) {
        if (err) {
          res.send({ status: 'error', message: err })
        } else {
          res.send({ status: 'success', data: body });
        }
      })
    }
  })
  .delete(function (req, res) {
    const { productId } = req.params;
    let sql = `DELETE FROM Product WHERE ProductId = ? `;
    con.query(sql, productId, function (err) {
      if (err) {
        res.send({ status: 'error', message: err })
      } else {
        res.send({ status: 'success', data: productId });
      }
    })
  });

// CATEGORY
app.route('/category')
  .get(function (req, res) {
    let sql = 'SELECT * FROM Category'
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: 'error', message: err })
      } else {
        res.send({ status: 'success', data: response });
      }
    })
  })
  .post(function (req, res) {
    let sql = `INSERT INTO Category SET ?`
    const { body } = req;
    if (!body.CategoryId) {
      res.status(400).send({ status: 'error', message: 'Dữ liệu đầu vào không tồn tại.' })
    } else {
      con.query(sql, body, function (err) {
        if (err) {
          res.send({ status: 'error', message: err })
        } else {
          res.send({ status: 'success', data: body });
        }
      })
    }
  });

app.route('/category/:categoryId')
  .get(function (req, res) {
    const { categoryId } = req.params;
    let sql = 'SELECT * FROM Category WHERE CategoryId = ?'
    con.query(sql, categoryId, (err, response) => {
      if (err) throw err;
      const data = response && Array.isArray(response) ? response.find(el => el.CategoryId == categoryId) : null;
      if (data) {
        res.send({ status: 'success', data: data });
      } else {
        res.send({ status: 'error', message: 'CategoryId không tồn tại.' })
      }
    })
  })
  .put(function (req, res) {
    let sql = `UPDATE Category 
              SET ?
              WHERE CategoryId = ?`;
    const { body, params } = req;
    const { categoryId } = params;
    if (!body.CategoryId) {
      res.status(400).send({ status: 'error', message: 'CategoryId vào không tồn tại.' })
    } else {
      con.query(sql, [body, categoryId], function (err) {
        if (err) {
          res.send({ status: 'error', message: err })
        } else {
          res.send({ status: 'success', data: body });
        }
      })
    }
  })
  .delete(function (req, res) {
    const { categoryId } = req.params;
    let sql = `DELETE FROM Category WHERE CategoryId = ? `;
    con.query(sql, categoryId, function (err) {
      if (err) {
        res.send({ status: 'error', message: err })
      } else {
        res.send({ status: 'success', data: categoryId });
      }
    })
  });

// Manufacturer
app.route('/manufacturer')
  .get(function (req, res) {
    let sql = 'SELECT * FROM Manufacturer'
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: 'error', message: err })
      } else {
        res.send({ status: 'success', data: response });
      }
    })
  })
  .post(function (req, res) {
    let sql = `INSERT INTO Manufacturer SET ?`
    const { body } = req;
    if (!body.ManufacturerId) {
      res.status(400).send({ status: 'error', message: 'Dữ liệu đầu vào không tồn tại.' })
    } else {
      con.query(sql, body, function (err) {
        if (err) {
          res.send({ status: 'error', message: err })
        } else {
          res.send({ status: 'success', data: body });
        }
      })
    }
  });

app.route('/manufacturer/:manufacturerId')
  .get(function (req, res) {
    const { manufacturerId } = req.params;
    let sql = 'SELECT * FROM Manufacturer WHERE ManufacturerId = ?'
    con.query(sql, manufacturerId, (err, response) => {
      if (err) throw err;
      const data = response && Array.isArray(response) ? response.find(el => el.ManufacturerId == manufacturerId) : null;
      if (data) {
        res.send({ status: 'success', data: data });
      } else {
        res.send({ status: 'error', message: 'ManufacturerId không tồn tại.' })
      }
    })
  })
  .put(function (req, res) {
    let sql = `UPDATE Manufacturer 
              SET ?
              WHERE ManufacturerId = ?`;
    const { body, params } = req;
    const { manufacturerId } = params;
    if (!body.ManufacturerId) {
      res.status(400).send({ status: 'error', message: 'ManufacturerId vào không tồn tại.' })
    } else {
      con.query(sql, [body, manufacturerId], function (err) {
        if (err) {
          res.send({ status: 'error', message: err })
        } else {
          res.send({ status: 'success', data: body });
        }
      })
    }
  })
  .delete(function (req, res) {
    const { manufacturerId } = req.params;
    let sql = `DELETE FROM Manufacturer WHERE ManufacturerId = ? `;
    con.query(sql, manufacturerId, function (err) {
      if (err) {
        res.send({ status: 'error', message: err })
      } else {
        res.send({ status: 'success', data: manufacturerId });
      }
    })
  });
// Account
app.route('/account')
  .get(function (req, res) {
    let sql = 'SELECT * FROM Account'
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: 'error', message: err })
      } else {
        res.send({ status: 'success', data: response });
      }
    })
  })
  .post(function (req, res) {
    let sql = `INSERT INTO Account SET ?`
    const { body } = req;
    if (!body.AccountID) {
      res.status(400).send({ status: 'error', message: 'Dữ liệu đầu vào không tồn tại.' })
    } else {
      con.query(sql, body, function (err) {
        if (err) {
          res.send({ status: 'error', message: err })
        } else {
          res.send({ status: 'success', data: body });
        }
      })
    }
  });

app.route('/account/:accountId')
  .get(function (req, res) {
    const { accountId } = req.params;
    let sql = 'SELECT * FROM Account WHERE AccountID = ?'
    con.query(sql, accountId, (err, response) => {
      if (err) throw err;
      const data = response && Array.isArray(response) ? response.find(el => el.AccountID == accountId) : null;
      if (data) {
        res.send({ status: 'success', data: data });
      } else {
        res.send({ status: 'error', message: 'AccountID không tồn tại.' })
      }
    })
  })
  .put(function (req, res) {
    let sql = `UPDATE Account 
              SET ?
              WHERE AccountID = ?`;
    const { body, params } = req;
    const { accountId } = params;
    if (!body.AccountID) {
      res.status(400).send({ status: 'error', message: 'AccountID vào không tồn tại.' })
    } else {
      con.query(sql, [body, accountId], function (err) {
        if (err) {
          res.send({ status: 'error', message: err })
        } else {
          res.send({ status: 'success', data: body });
        }
      })
    }
  })
  .delete(function (req, res) {
    const { accountId } = req.params;
    let sql = `DELETE FROM Account WHERE AccountID = ? `;
    con.query(sql, accountId, function (err) {
      if (err) {
        res.send({ status: 'error', message: err })
      } else {
        res.send({ status: 'success', data: accountId });
      }
    })
  });


app.listen(port);
console.log('Server started at http://localhost:' + port);

