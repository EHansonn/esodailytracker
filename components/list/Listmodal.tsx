import { User } from "../../pages/yourdailies";
import React, { useState } from "react";
import { Button, Form, Input, Select, Tooltip } from "antd";
import Router from "next/router";
import { Quest } from "../../pages/yourdailies";
import { QuestionCircleOutlined } from "@ant-design/icons";
export interface ListModalRef {
  visible: boolean;
  showModal: (visible: boolean) => void;
  okay: () => void;
  cancel: () => void;
}

interface FormFields {
  title: string;
  content: string;
}

interface Props {
  quests?: Quest[];
  user?: User;
  categories?: string[];
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Listmodal: React.FC<Props> = ({ quests, user, categories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onReset = () => {
    form.resetFields();
  };

  const realQuestOptions = categories?.map((category) => ({
    label: category,
    options: quests
      ?.filter((quest) => {
        return quest.category === category;
      })
      .map((quests) => ({
        value: `${quests.optionalTitle}  ${quests.location} ${quests.repeatable} ${quests.reward} ${quests.category} &$$&${quests.value}`,
        label: `${quests.optionalTitle ? quests.optionalTitle : quests.value}`,
      })),
  }));
  //console.log(testQuestOptions);
  // const testss = questOptions?.map((e) => {
  //   return e.value.substring(
  //     e.value.length - (e.value.length - e.value.indexOf("}")) + 1,
  //     e.value.length
  //   );
  // });

  //console.log(testss);

  const onFinish = async (values: any) => {
    const response = await fetch("/api/list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: values.title,
        content: values.content,
        user: user,
        tasks: values.quests.map((e: string) => {
          return e.substring(
            e.length - (e.length - e.indexOf("&$$&")) + 4,
            e.length
          );
        }),
      }),
    });
    Router.push("/yourdailies");
    onReset();
  };
  return (
    <div className="bg-slate-300   rounded-lg py-2 px-2  ">
      <div className="flex flex-row justify-center relative">
        <div className="text-center">Your Custom Lists</div>
        <Tooltip title="If you don't want to see every single possible daily, you can create your own customized list to help you keep track of the things you want.">
          <QuestionCircleOutlined className="absolute top-0 right-0"></QuestionCircleOutlined>
        </Tooltip>
      </div>
      <Form
        form={form}
        layout="vertical"
        style={{ width: "100%" }}
        name="control-hooks"
        onFinish={onFinish}
      >
        <Form.Item name="title" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="content"
          label="Description"
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Quests"
          name="quests"
          rules={[{ required: true, message: "Please input your quests!" }]}
        >
          <Select mode="multiple" options={realQuestOptions} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Listmodal;
