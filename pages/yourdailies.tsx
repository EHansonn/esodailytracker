import { GetServerSideProps, NextPage } from "next";
import List, { ListProps } from "../components/list/List";
import { getServerSession, Session } from "next-auth";
import { getSession, GetSessionParams, useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import prisma from "../lib/prisma";
import Listmodal from "../components/list/Listmodal";
import { Button } from "antd";
import Router, { useRouter } from "next/router";
import Layout from "../components/layout";
import QuestRow from "../components/quests/QuestRow";
import QuestCategory from "../components/quests/QuestCategory";
import styles from "./index.module.css";
import Head from "next/head";
import { signIn, signOut } from "next-auth/react";
import moment from "moment";

export type User = {
  id: string;
  name: string;
  createdAt: string;
  checkedTasks?: string;
  questsOnUser?: QuestsOnUser[];
};

export type QuestsOnUser = {
  user: User;
  quest: Quest;
  userId: string;
  questName: string;
};

export type Quest = {
  value: string;
  category?: string;
  optionalTitle: string | null;
  description?: string;
  repeatable?: string;
  location?: string;
  questGiver?: string;
  uespLink?: string;
  reward?: string;
};

interface Props {
  user: User;
  lists?: ListProps[];
  error?: string;
  quests?: Quest[];
}

const YourDailies: NextPage<Props> = ({ user, lists, quests }) => {
  const { data: session, status } = useSession();

  //console.log(quests);

  //let utcTimeDaily = "2023-03-07 11:00:00";
  //var localDailyReset = moment.utc(utcTimeDaily).local().format("HH:mm:ss");
  let localDailyReset = "00:00";
  //Categories for the possible quests. Hardcoded for now...
  const categories = [
    "Undaunted Pledges",
    "Crafting Writs",
    "Arenas",
    "Trials",
    "Craglorn Quests",
    "PvP Quests",
    "Northern Elsweyr Defense Force",
    "Guild Daily Quests",
    "Imperial City Quests",
    "Wrothgar Quests",
    "Thieves Guild Quests",
    "Gold Coast Quests",
    "Vvardenfell Quests",
    "Clockwork City Quests",
    "Summerset Quests",
    "Murkmire Quests",
    "Elsweyr Quests",
    "Dragonhold Quests",
    "Western Skyrim Quests",
    "The Reach Quests",
    "Blackwood Quests",
    "Deadlands Quests",
    "High Isle Quests",
    "Galen Quests",
    "Cyrodiil Settlement Quests",
    "Fighters Guild Bounty Quests",
    "Cyrodilic Collections",
  ];

  if (!session) {
    return (
      <Layout>
        {status === "loading" && <div>loading</div>}
        {status === "unauthenticated" && (
          <div className="content-center text-center">
            <div className="text-white w-screen text-center pb-5">
              Please sign in
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
        <div className={`pb-4 pt-2 pl-4 pr-4 ${styles.dailies}`}>
          <div className="flex flex-col lg:flex-row md:flex-row  justify-center">
            <div className="text-slate-300 pb-2 text-center">
              {`Daily quests reset at ${localDailyReset} each day`}
            </div>
            <div className="text-slate-300 pb-2 pl-5 text-center">
              {`Weekly quests reset at ${localDailyReset} on monday`}
            </div>
          </div>

          <div className="flex  sm:space-x-0 lg:space-x-5 md:space-x-3  flex-col sm:flex-col md:flex-row lg:flex-row justify-between">
            <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 flex   auto-cols-1  w-2/3  ">
              {/* Displaying Quests */}
              {categories.map((category) => (
                <div key={category} className=" flex flex-col">
                  <QuestCategory
                    quests={quests?.filter(function (el) {
                      return el.category === category;
                    })}
                    name={category}
                    user={user}
                  ></QuestCategory>
                </div>
              ))}
            </div>
            <div className="flex flex-col space-y-3 lg:w-1/3 md:w-1/3 sm:w-full lg:mt-0 md:mt-0 mt-4">
              <Listmodal quests={quests} user={user}></Listmodal>
              {lists?.map((list: any) => (
                <div
                  className="bg-slate-300  flex flex-col object-contain rounded-lg py-2 pl-2 pr-2
                  "
                  key={list.id}
                >
                  <Button
                    danger
                    onClick={async () => {
                      await fetch(`/api/list/${list.id}`, {
                        method: "DELETE",
                      });
                      Router.push("/yourdailies");
                    }}
                  >
                    delete
                  </Button>
                  <List list={list}></List>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  return <div>access denied</div>;
};

export async function getServerSideProps<Props>(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const userId = session?.user.email;
  const u = await prisma?.user.findFirst({
    where: { email: session?.user.email },
    include: {
      QuestsOnUser: true,
    },
  });

  const lists = await prisma.list.findMany({
    where: {
      userId: u?.id,
    },
    include: {
      owner: {
        select: { name: true, email: true },
      },
      tasks: {
        select: {
          quest: {
            select: {
              value: true,
            },
          },
        },
      },
    },
  });

  const availableQuests = await prisma?.quest.findMany({});
  if (u && lists) {
    return {
      props: {
        session: session,
        lists,
        user: {
          id: u.id,
          name: u.name,
          createdAt: u.createdAt.toString(),
          checkedTasks: u.checkedTasks,
          questsOnUser: JSON.parse(JSON.stringify(u.QuestsOnUser)),
        },
        quests: availableQuests,
      },
    };
  }
  return {
    props: { error: true },
  };
}

export default YourDailies;
//JSON.parse(JSON.stringify(u))
