import { NextPage } from "next";
import { ListProps } from "../components/list/List";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import prisma from "../lib/prisma";
import { Button } from "antd";
import Layout from "../components/layout";
import Head from "next/head";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Quest, User } from "./yourdailies";
import CharacterRow from "../components/character/CharacterRow";
import CharacterModel from "../components/character/CharacterModel";
import Link from "next/link";
import { getData } from "./api/user";
import { EditOutlined } from "@ant-design/icons";
interface Props {
  user: User;
  lists?: ListProps[];
  error?: string;
  quests?: Quest[];
}

const YourDailies: NextPage<Props> = ({ user }) => {
  const { data: session, status } = useSession();

  const [editMode, setEditMode] = useState(false);

  if (!session) {
    return (
      <Layout>
        <Head>
          <title>Please Sign In</title>
          <meta name="ESO Daily Checklist - ESO ToDO List" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {status === "loading" && <div>loading</div>}
        {status === "unauthenticated" && (
          <div className="content-center text-center">
            <div className="text-white w-screen text-center pb-5 pt-5">
              Please sign in to view your profile
            </div>
            <Button
              type="primary"
              onClick={(e) => {
                signIn();
              }}
            >
              Sign In With Google
            </Button>
          </div>
        )}
      </Layout>
    );
  }

  if (session) {
    return (
      <Layout>
        <Head>
          <title>Your Profile</title>
          <meta name="ESO Daily Checklist - ESO ToDO List" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <div className={`pb-4 pt-2 pl-4 pr-4 `}>
          <div className="flex  justify-center   ">
            <div className=" ml-10  sm:ml-40 mr-10 sm:mr-40 w-screeen text-center pr-3 border-b-2 border-t-0 border-l-0  pb-10 border-r-0 border-solid text-offwhite-50 flex flex-col w-max sm:flex-row justify-center">
              <div className="flex flex-col ">
                <div
                  className="border-solid border-b-2 border-t-0 border-l-0 border-r-0 w-full pr-3
                 mr-0 sm:mr-5  md:w-56 lg:w-96 "
                >
                  Your Characters
                  <EditOutlined
                    // className={classNames(
                    //   item.current
                    //     ? "bg-gray-900 text-white"
                    //     : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    //   "rounded-md px-3 py-2 text-sm font-medium"
                    // )}
                    onClick={() => {
                      setEditMode(!editMode);
                    }}
                    className=" ml-2 rounded-sm hover:bg-gray-700 transition ease-in-out delay-75 hover:scale-110 duration-100"
                  />
                </div>
                {user.characters?.map((character) => (
                  <CharacterRow
                    editMode={editMode}
                    key={character.value}
                    user={user}
                    character={character}
                  ></CharacterRow>
                ))}
              </div>
              <div>
                <CharacterModel user={user}></CharacterModel>
              </div>
            </div>
          </div>
          <Link
            className="text-center justify-center flex pt-5"
            href={"/yourdailies"}
          >
            <Button type="primary">View your daily checklist</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  return <div>access denied</div>;
};

export async function getServerSideProps<Props>(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      props: { error: true },
    };
  }
  const userData = await getData(session);
  return userData;
}

export default YourDailies;
//JSON.parse(JSON.stringify(u))