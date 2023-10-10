import { Form, Input, Select } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import TemplateTable from "../common/template-table/template-table.component"

import { getAllProduct } from './service/product.service'


const ProductManagemnet = () => {
    const [column, setColumn] = useState([])
    const [dataProduct, setDataProduct] = useState<any>([])
    useEffect(() => {
        getAllProduct().then((res) => {
            setDataProduct(res.data)
        })
    }, [])


    useEffect(() => {
        const columTemp: any = []
        if (dataProduct.length > 0) {
            Object?.keys(dataProduct[0]).map((itemKey) => {
                if (!['_id', '__v', 'updatedAt', 'listQuantityRemain'].includes(itemKey)) {
                    return columTemp.push({
                        title: itemKey,
                        dataIndex: itemKey,
                        key: itemKey,
                        render: (text: any, record: any, index: any) => {
                            if (itemKey === 'images' && dataProduct[index]?.images && dataProduct[index].images.length > 0) {
                                return (
                                    <img
                                        src={dataProduct[index].images[0]}
                                        alt="Product Image"
                                        style={{ maxWidth: '50px' }}
                                    />
                                );
                            }
                            return text;
                        },
                    })
                }
            }
            )
        }
        if (dataProduct[0]?.listQuantityRemain && dataProduct[0]?.listQuantityRemain.length > 0) {
            const firstItem = dataProduct[0].listQuantityRemain[0];
            if (firstItem) {
                Object.keys(firstItem).forEach((itemKey) => {
                    if (!['_id', 'updatedAt'].includes(itemKey)) {
                        columTemp.push({
                            title: `${itemKey}`,
                            dataIndex: `${itemKey}`,
                            key: `${itemKey}`,
                            render: (text: any, record: any, index: any) => {
                                return (
                                    <>
                                      {dataProduct[index]?.listQuantityRemain?.map((item: any, index:any) => (
                                        <p key={index}>
                                          {item[itemKey]}
                                          <hr />
                                        </p>
                                      ))}
                                    </>
                                  );
                            }
                        });
                    }

                });
            }
        }
        setColumn(columTemp)
    }, [dataProduct])
    return (
        <div>
            <TemplateTable dataTable={dataProduct} columnTable={column}
                formEdit={
                    <Fragment>
                        <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your username!' }]}>
                            <Input />
                        </Form.Item>
                        {/* <Form.Item label='Role' name='role' rules={[{ required: true, message: 'Please input your username!' }]}>
                            <Select placeholder='Please select'>
                                <Option value='ADMIN'>ADMIN</Option>
                                <Option value='USER_STORE'>USER_STORE</Option>
                                <Option value='USER'>USER</Option>
                            </Select>
                        </Form.Item> */}

                        <Form.Item
                            label='PhoneNumber'
                            name='phoneNumber'
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='nickName'
                            name='nickName'
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='gender'
                            name='gender'
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='nationality'
                            name='nationality'
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Fragment>
                }
            />
        </div>
    )
}

export default ProductManagemnet