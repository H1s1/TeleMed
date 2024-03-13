const {User} = require('../models/User');
          const adminIds =  User.findAll({
            where: { type: 'ad' },
            attributes: ['id'], // Select only ID for performance optimization
          }).map(admin => admin.id);
          console.log(admin);
