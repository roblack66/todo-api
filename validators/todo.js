import Joi from "joi";


export const addTodoValidator = Joi.object({
    title: Joi.string().required(),
    icon:Joi.string().required()
});

export const updatedTodoValidator = Joi.object({
    title: Joi.string(),
    icon: Joi.string(),
    completed: Joi.boolean()
});