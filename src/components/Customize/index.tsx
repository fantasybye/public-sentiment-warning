import React, { useState } from 'react';
import { Button, Form, Input, message, Popconfirm } from 'antd';
import cls from 'classnames';

import styles from './index.module.less';
import { FourSlots, FiveSlots, SixSlots } from '../../config/layout';
import { useForm } from 'antd/lib/form/Form';

enum ConfigStep {
  Layout = 0,
  Model = 1,
  Save = 2
}

enum Layout {
  Four = 4,
  Five = 5,
  Six = 6
}

export interface CustomizeProps {
  setIsCustomize: (is: boolean) => void;
}

export interface Model {
  slot: number;
  config?: Record<string, unknown>;
}

export interface Config {
  layout: Layout;
  model: Model[];
  info?: {
    id?: string;
    name: string;
    username: string;
    password: string;
  }
}

const tempConfig: Config = {
  layout: 4,
  model: [],
  info: {
    name: 'test',
    username: 'test',
    password: '123'
  }
};
const Customize = ( props: CustomizeProps) => {
  const [step, setStep] = useState<ConfigStep>(ConfigStep.Layout);
  const [layout, setLayout] = useState<Layout>();
  const [config, setConfig] = useState<Config | null>();
  const [models, setModels] = useState<Model[]>([]);
  const [form] = useForm();
  const { setIsCustomize } = props;
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <Popconfirm
          placement='rightTop'
          title='返回将丢失进行中的配置，是否确认？'
          disabled={!config} 
          onConfirm={() => {setIsCustomize(false); setConfig(null);}}
          cancelText='取消'
          okText='确认'

        >
          <Button type='primary' onClick={() => {if(!config)setIsCustomize(false);}} >返回</Button>
        </Popconfirm>
      </div>
      <div className={styles.content}>
        <div className={styles.config}>
          <div className={styles.steps}>
            {step === ConfigStep.Layout ? 
              <div className={styles.step1}>
                <div className={styles.slots} onClick={() => {
                  setLayout(Layout.Four);
                }}><FourSlots /></div>
                <div className={styles.slots} onClick={() => {
                  setLayout(Layout.Five);
                }}><FiveSlots /></div>
                <div className={styles.slots} onClick={() => {
                  setLayout(Layout.Six);
                }}><SixSlots /></div>
              </div> 
              : step === ConfigStep.Model ? 
                <div className={styles.step2}>
                  {/* {(() => {
                    const step2 = [];
                    if(layout){
                      for(let i = 0; i < layout; i++) {
                        step2.push(<div className={styles.models}>test</div>);
                      }
                    }
                    return step2;
                  })()} */}
                  <div className={cls([styles.models,styles.model1])} />
                  <div className={cls([styles.models,styles.model2])} />
                  <div className={cls([styles.models,styles.model3])} />
                  <div className={cls([styles.models,styles.model4])} />
                  <div className={cls([styles.models,styles.model5])} />
                  <div className={cls([styles.models,styles.model6])} />
                </div>
                : 
                <Form className={styles.step3} style={{paddingTop: '30px'}} form={form}>
                  <Form.Item 
                    className={styles.formItem} 
                    name='name'
                    rules={[
                      {
                        required: true,
                        message: '请输入系统名称!',
                      },
                    ]}
                  >
                    <Input placeholder='请输入系统名称' addonBefore={<div>系统名称</div>}/>
                  </Form.Item>
                  <Form.Item 
                    className={styles.formItem} 
                    name='username'
                    rules={[
                      {
                        required: true,
                        message: '请输入用户名!',
                      },
                    ]}
                  >
                    <Input  placeholder='请输入系统用户名' addonBefore={<div>&nbsp;&nbsp;用户名&nbsp;&nbsp;</div>}/>
                  </Form.Item>
                  <Form.Item
                    className={styles.formItem} 
                    name='password'
                    rules={[
                      {
                        required: true,
                        message: '请输入密码!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password  placeholder='请输入系统用户密码' addonBefore={<div>用户密码</div>}/>
                  </Form.Item>
                  <Form.Item 
                    className={styles.formItem} 
                    name='confirm'
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: '请确认输入的密码!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('您输入的两遍密码不相同！'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password  placeholder='请确认系统用户密码' addonBefore={<div>确认密码</div>}/>
                  </Form.Item>
                </Form>
            }
          </div>
          <div className={styles.nextButton}>
            {step === 0 && <Button type='primary' disabled={!layout} onClick={() => {
              setStep((prev) => prev + 1 );
              if(layout) {
                const initModels = [];
                for(let i = 0; i < layout; i++) {
                  initModels.push(
                    {
                      slot: i
                    }
                  );
                }
                setModels(initModels);
              }
            }}>下一步</Button>}
            {step === 1 && <Button type='primary' disabled={!(()=>{
              // let isModel = true;
              // models.forEach((model) => {
              //   if(!model.config)
              //     isModel = false;
              // });
              // return isModel;
              return true;
            })()} onClick={() => {
              setStep((prev) => prev + 1 );
            }}>下一步</Button>}
            {step === 2 && <Button type='primary' disabled={!form.validateFields()} onClick={() => {
              message.success('保存成功');
            }}>保存</Button>}
            {step > 0  && <Button type='primary' onClick={() => {
              setStep((prev) => prev - 1 );
            }}>上一步</Button>}
          </div>
        </div>
        <div className={styles.previewContainer}>
          {layout === 4 ? <div className={styles.previewContent} style={{paddingBottom: step === 2 ? '5px' : '50px'}}><FourSlots/></div>
            : layout === 5 ? <div className={styles.previewContent} style={{paddingBottom: step === 2 ? '5px' : '50px'}}><FiveSlots/></div>
              : layout === 6 ?<div className={styles.previewContent} style={{paddingBottom: step === 2 ? '5px' : '50px'}}><SixSlots/></div>
                : '预览界面'}
        </div>
      </div>
    </div>
  );
};

export { Customize };