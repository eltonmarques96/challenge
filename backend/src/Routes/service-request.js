const router = require('express').Router();
const orderRequest = require('../model/order-request');

/**
 * @swagger
 * /order-request:
 *   get:
 *     summary: Return order requests
 *     responses:
 *         200:
 *             description: ok las cosas
 *
 */
router.get('/order-request/',
    (req,res, next) => {
    console.log('hola-wep')
        res.json(
            {
                saludo: "ok las cosas"
            }
        )
        next();
    }
)

router.post('/order-request/',
    async (req,res, next) => {
        console.log('aca')
      const or=   new orderRequest ({
            title: 'Hola',
            body: 'todo bien'
        })

        try{
            await or.save();

            res.json(
                {
                    saludo: "hola"
                }
            )
            next();

        }catch (e) {
            console.log(e)
            res.json({
                error:'error'
            })
        }

    }
)

module.exports = router;