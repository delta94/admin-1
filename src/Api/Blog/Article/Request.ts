import axios, {AxiosResponse} from 'axios';
import {Article, Response} from '../../../Class';
import {ADD, DELETE_BY_ID, GET_ALL, GET_BY_CATEGORY, GET_BY_ID, MODIFY} from './ROUTE';
import {message} from 'antd';

export async function getArticleById(id: number): Promise<Article | null>
{
    try
    {
        const {data: response}: AxiosResponse<Response<Article>> = await axios.get(GET_BY_ID, {
            params: {
                json: JSON.stringify({id}),
            },
        });

        const {isSuccessful, message: msg, data} = response;
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            message.warning(msg);
            return null;
        }
    }
    catch (e)
    {
        message.error('网络异常');
        console.log(e);
        return null;
    }
}

export async function getAllArticle(): Promise<Array<Article> | null>
{
    try
    {
        const {data: response}: AxiosResponse<Response<Array<Article>>> = await axios.get(GET_ALL);

        const {isSuccessful, message: msg, data} = response;
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            message.warning(msg);
            return null;
        }
    }
    catch (e)
    {
        message.error('网络异常');
        console.log(e);
        return null;
    }
}

export async function getArticleByCategory(category: number): Promise<Array<Article> | null>
{
    try
    {
        const {data: response}: AxiosResponse<Response<Array<Article>>> = await axios.get(GET_BY_CATEGORY, {
            params: {
                json: JSON.stringify({category}),
            },
        });
        const {isSuccessful, message: msg, data} = response;

        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            message.warning(msg);
            return null;
        }

    }
    catch (e)
    {
        message.error('网络异常');
        console.log(e);
        return null;
    }
}

export async function addArticle(article: Article): Promise<true | null>
{
    try
    {
        const {data: response}: AxiosResponse<Response<void>> = await axios.post(ADD, JSON.stringify(article));
        const {isSuccessful, message: msg} = response;
        if (isSuccessful)
        {
            return true;
        }
        else
        {
            message.warning(msg);
            return null;
        }
    }
    catch (e)
    {
        message.error('网络异常');
        console.log(e);
        return null;
    }
}

export async function deleteArticleById(id: number): Promise<true | null>
{
    try
    {
        const {data: response}: AxiosResponse<Response<void>> = await axios.post(DELETE_BY_ID, JSON.stringify({id}));
        const {isSuccessful, message: msg} = response;
        if (isSuccessful)
        {
            return true;
        }
        else
        {
            message.warning(msg);
            return null;
        }
    }
    catch (e)
    {
        message.error('网络异常');
        console.log(e);
        return null;
    }
}

export async function modifyArticle(article: Article): Promise<true | null>
{
    try
    {
        const {data: response}: AxiosResponse<Response<void>> = await axios.post(MODIFY, JSON.stringify(article));
        const {isSuccessful, message: msg} = response;
        if (isSuccessful)
        {
            return true;
        }
        else
        {
            message.warning(msg);
            return null;
        }
    }
    catch (e)
    {
        message.error('网络异常');
        console.log(e);
        return null;
    }
}