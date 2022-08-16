import { Router } from 'express'
import book from '../controllers/book.js'

const router = new Router()

/**
 * @swagger
 * components:
 *  schemas:
 *      Book:
 *          type: object
 *          required:
 *              - title
 *              - autor
 *          properties:
 *              _id:
 *                  type: string
 *                  description: Уникальный идентификатор записи
 *              title:
 *                  type: string
 *                  description: Заголовок книги
 *              autor:
 *                  type: string
 *                  description: Автор книги
 *              price:
 *                  type: string
 *                  description: Цена
 *          example:
 *              _id: 62f2add963f1ecd1d4a03455
 *              title: Дети капитана Гранта
 *              autor: Жюль Верн
 *              price: 2000
 */

/**
 * @swagger
 * tags:
 *  name: Books
 *  description: Описание тега
 */

/**
 * @swagger
 * /api/v1/book:
 *  get:
 *      summary: Описание эндпоинта
 *      tags: [Books]
 *      responses:
 *          200:
 *              description: в этом эндпоинте получаем список книг
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Book'
 */

router.get('/', book.getAll)

/**
 * @swagger
 * /api/v1/book/{id}:
 *  get:
 *      summary: получение одной книги по идентификатору
 *      tags: [Books]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *                type: string
 *            required: true
 *            description: уникальный идентификатор книги
 *      responses:
 *          200:
 *              description: мы получили выбранную книгу
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Book'
 *          404:
 *              description: книга не найдена
 */

router.get('/:id', book.getOne)

/**
 * @swagger
 * /api/v1/book:
 *  post:
 *      summary: добавление новой книги
 *      tags: [Books]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Book'
 *      responses:
 *          200:
 *              description: Книга успешно добавлена
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Book'
 *          500:
 *              description: что то пошло не так
 * 
 */

router.post('/', book.add)

/**
 * @swagger
 * /api/v1/book/{id}:
 *  put:
 *      summary: редактирование книги
 *      tags: [Books]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: уникальный идентификатор записи
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Book'
 *      responses:
 *          200:
 *              description: запись успешно обновлена
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Book'
 *          404: 
 *              description: книга не найдена
 *          500:
 *              description: что-то пошло не так
 */

router.put('/:id', book.update)

/**
 * @swagger
 * /api/v1/book:
 *  delete:
 *      summary: удаление книги
 *      tags: [Books]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: уникальный идентификатор записи
 *      responses:
 *          200:
 *              description: Запись успешно удалена
 *          404:
 *              description: Запись не найдена
 *      
 */

export default router

