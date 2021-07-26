module.exports.mainController = {
    getDrink: async (req, res) => {
      try {
        const coffee = await Drink.find({}, "name price");
        res.json(coffee);
      } catch (err) {
        res.json(err);
      }
    },
  
    listDrink: async (reg, res) => {
      try {
        const drinksInStock = await Drink.find({}, "inStock");
        res.json(drinksInStock);
      } catch (err) {
        res.json(err);
      }
    },
  
    infoDrink: async (req, res) => {
      try {
        const info = await Drink.find({}, "caffeine volume description");
        res.json(info);
      } catch (err) {
        res.json(err);
      }
    },
  
    addDrink: async (req, res) => {
      try {
          await Drink.create({
              name: req.body.name,
              price: req.body.price,
              isInStock: req.body.isInStock,
              hasCaffeine: req.body.hasCaffeine,
              volume: req.body.volume,
              description: req.body.description,
            });
        res.json("Добавлен");
      } catch (e) {
          res.json(e)
          console.log("e")
      }
    },
  
    delDrink: async (req, res) => {
      try {
        const delbyId = await Drink.delete({}, "name");
        res.json(delbyId);
      } catch {
        res.json();
      }
    },
  
    editDrink: async (req, res) => {
      try {
        const editbyId = await Drink.find({}, "name");
        res.json(editbyId);
      } catch (err) {
        res.json(err);
      }
    },
  };