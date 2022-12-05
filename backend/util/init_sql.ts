import dal from "../dal/dal"

const parts = "CREATE TABLE IF NOT EXISTS `parts` (`id` INT NOT NULL AUTO_INCREMENT,`part_name` VARCHAR(45) NULL, PRIMARY KEY (`id`));"
const customers = "CREATE TABLE IF NOT EXISTS `part_shop`.`customers` (`id` INT NOT NULL AUTO_INCREMENT, `customer_name` VARCHAR(45) NULL, `customer_adress` VARCHAR(45) NULL, `part_id` INT NULL,`customerPhone` VARCHAR(45) NULL, PRIMARY KEY (`id`));"
  const sqlInit = ()=>{
    dal.execute(parts);
    dal.execute(customers);
}

export default sqlInit;