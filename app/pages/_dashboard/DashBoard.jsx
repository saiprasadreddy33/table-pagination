"use client";
import Header from "@/app/components/Header";
//import Loading from "@/app/components/Loading";
import SideBar from "@/app/components/SideBar";
import Table from "@/app/components/Table";
import TableFooter from "@/app/components/TableFooter";
import { useEffect, useState } from "react";

const DashBoard = () => {
  const [isLoading, setIsLoading] = useState(true);

  const tableData = [
    {
      id: 1,
      createOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 +966558441503",
      services: "Private Language Session",
      Scheduled: "Sun, 07 Jan 2024 7:42 PM",
    },
    {
      id: 2,
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Hannibal Smith",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      id: 3,
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Labeeb Labio",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      id: 4,
      createOn: "Sat, 06 Jan 2024 4:42 PM",
      payer: "Jessica Darvis",
      status: "Inactive",
      email: "theodore@gmail.com",
      payerPhone: "+91 +466558441203",
      services: "Fitness Session",
      Scheduled: "Sun, 07 Jan 2024 7:42 PM",
    },
    {
      id: 5,
      createOn: "Tue, 07 Jan 2024 1:36 PM",
      payer: "Ramees Rio",
      status: "Lead",
      email: "smith@gmail.com",
      payerPhone: "+91 +346558446722",
      services: "Boxing Session",
      Scheduled: "Thu, 04 Jan 2024 2:42 PM",
    },
    {
      id: 6,
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Joyet Joy",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      id: 7,
      createOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Althaf shaik",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 +966558441503",
      services: "Private Language Session",
      Scheduled: "Sun, 07 Jan 2024 7:42 PM",
    },
    {
      id: 8,
      createOn: "Tue, 07 Jan 2024 1:36 PM",
      payer: "Waris leo",
      status: "Lead",
      email: "smith@gmail.com",
      payerPhone: "+91 +346558446722",
      services: "Boxing Session",
      Scheduled: "Thu, 04 Jan 2024 2:42 PM",
    },
    {
      id: 9,
      createOn: 'Wed, 07 Jan 2024 2:42 PM',
      payer: 'Mike Torello',
      status: 'Inactive',
      email: 'hannibalsmith@gmail.com',
      payerPhone: '+91  +96654586876',
      services: 'Boxing Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 10,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Templeton Peck',
      status: 'Inactive',
      email: 'michaelknight@gmail.com',
      payerPhone: '+91  +966545186876',
      services: 'Boxing Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 11,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'April Curtis',
      status: 'Lead',
      email: 'aprilcurtis@gmail.com',
      payerPhone: '+91  +9665445186876',
      services: 'Exercise Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 12,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Lynn Tanner',
      status: 'Inactive',
      email: 'Lynn@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Kids play Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 13,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Col.Roderick Decker',
      status: 'Lead',
      email: 'decker@gmail.com',
      payerPhone: '+91  +966559456876',
      services: 'Fitness Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 14,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Templeton Peck',
      status: 'Inactive',
      email: 'michaelknight@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Private Language Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 15,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Theodore T.C. Calvin',
      status: 'Active',
      email: 'theodore@gmail.com',
      payerPhone: '+91  +966559456876',
      services: 'Arobics Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 16,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Hannibal Smith',
      status: 'Active',
      email: 'hannibalsmith@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Fitness Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 17,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'April Curtis',
      status: 'Active',
      email: 'aprilcurtis@gmail.com',
      payerPhone: '+91  +966559456876',
      services: 'Arobics Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 18,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Michael Knight',
      status: 'Lead',
      email: 'smith@gmail.com',
      payerPhone: '+91  +96655945876',
      services: 'Swim beginner for class new Sess...',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 19,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Mike Torello',
      status: 'Lead',
      email: 'hannibalsmith@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Private Language Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 2,
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Hannibal Smith",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      id: 3,
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Labeeb Labio",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      id: 4,
      createOn: "Sat, 06 Jan 2024 4:42 PM",
      payer: "Jessica Darvis",
      status: "Inactive",
      email: "theodore@gmail.com",
      payerPhone: "+91 +466558441203",
      services: "Fitness Session",
      Scheduled: "Sun, 07 Jan 2024 7:42 PM",
    },
    {
      id: 5,
      createOn: "Tue, 07 Jan 2024 1:36 PM",
      payer: "Ramees Rio",
      status: "Lead",
      email: "smith@gmail.com",
      payerPhone: "+91 +346558446722",
      services: "Boxing Session",
      Scheduled: "Thu, 04 Jan 2024 2:42 PM",
    },
    {
      id: 6,
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Joyet Joy",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      id: 7,
      createOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Althaf shaik",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 +966558441503",
      services: "Private Language Session",
      Scheduled: "Sun, 07 Jan 2024 7:42 PM",
    },
    {
      id: 8,
      createOn: "Tue, 07 Jan 2024 1:36 PM",
      payer: "Waris leo",
      status: "Lead",
      email: "smith@gmail.com",
      payerPhone: "+91 +346558446722",
      services: "Boxing Session",
      Scheduled: "Thu, 04 Jan 2024 2:42 PM",
    },
    {
      id: 9,
      createOn: 'Wed, 07 Jan 2024 2:42 PM',
      payer: 'Mike Torello',
      status: 'Inactive',
      email: 'hannibalsmith@gmail.com',
      payerPhone: '+91  +96654586876',
      services: 'Boxing Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 10,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Templeton Peck',
      status: 'Inactive',
      email: 'michaelknight@gmail.com',
      payerPhone: '+91  +966545186876',
      services: 'Boxing Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 11,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'April Curtis',
      status: 'Lead',
      email: 'aprilcurtis@gmail.com',
      payerPhone: '+91  +9665445186876',
      services: 'Exercise Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 12,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Lynn Tanner',
      status: 'Inactive',
      email: 'Lynn@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Kids play Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 13,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Col.Roderick Decker',
      status: 'Lead',
      email: 'decker@gmail.com',
      payerPhone: '+91  +966559456876',
      services: 'Fitness Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 14,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Templeton Peck',
      status: 'Inactive',
      email: 'michaelknight@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Private Language Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 15,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Theodore T.C. Calvin',
      status: 'Active',
      email: 'theodore@gmail.com',
      payerPhone: '+91  +966559456876',
      services: 'Arobics Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 16,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Hannibal Smith',
      status: 'Active',
      email: 'hannibalsmith@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Fitness Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 17,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'April Curtis',
      status: 'Active',
      email: 'aprilcurtis@gmail.com',
      payerPhone: '+91  +966559456876',
      services: 'Arobics Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 18,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Michael Knight',
      status: 'Lead',
      email: 'smith@gmail.com',
      payerPhone: '+91  +96655945876',
      services: 'Swim beginner for class new Sess...',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 19,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Mike Torello',
      status: 'Lead',
      email: 'hannibalsmith@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Private Language Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 2,
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Hannibal Smith",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      id: 3,
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Labeeb Labio",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      id: 4,
      createOn: "Sat, 06 Jan 2024 4:42 PM",
      payer: "Jessica Darvis",
      status: "Inactive",
      email: "theodore@gmail.com",
      payerPhone: "+91 +466558441203",
      services: "Fitness Session",
      Scheduled: "Sun, 07 Jan 2024 7:42 PM",
    },
    {
      id: 5,
      createOn: "Tue, 07 Jan 2024 1:36 PM",
      payer: "Ramees Rio",
      status: "Lead",
      email: "smith@gmail.com",
      payerPhone: "+91 +346558446722",
      services: "Boxing Session",
      Scheduled: "Thu, 04 Jan 2024 2:42 PM",
    },
    {
      id: 6,
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Joyet Joy",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      id: 7,
      createOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Althaf shaik",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 +966558441503",
      services: "Private Language Session",
      Scheduled: "Sun, 07 Jan 2024 7:42 PM",
    },
    {
      id: 8,
      createOn: "Tue, 07 Jan 2024 1:36 PM",
      payer: "Waris leo",
      status: "Lead",
      email: "smith@gmail.com",
      payerPhone: "+91 +346558446722",
      services: "Boxing Session",
      Scheduled: "Thu, 04 Jan 2024 2:42 PM",
    },
    {
      id: 9,
      createOn: 'Wed, 07 Jan 2024 2:42 PM',
      payer: 'Mike Torello',
      status: 'Inactive',
      email: 'hannibalsmith@gmail.com',
      payerPhone: '+91  +96654586876',
      services: 'Boxing Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 10,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Templeton Peck',
      status: 'Inactive',
      email: 'michaelknight@gmail.com',
      payerPhone: '+91  +966545186876',
      services: 'Boxing Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 11,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'April Curtis',
      status: 'Lead',
      email: 'aprilcurtis@gmail.com',
      payerPhone: '+91  +9665445186876',
      services: 'Exercise Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 12,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Lynn Tanner',
      status: 'Inactive',
      email: 'Lynn@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Kids play Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 13,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Col.Roderick Decker',
      status: 'Lead',
      email: 'decker@gmail.com',
      payerPhone: '+91  +966559456876',
      services: 'Fitness Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 14,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Templeton Peck',
      status: 'Inactive',
      email: 'michaelknight@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Private Language Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 15,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Theodore T.C. Calvin',
      status: 'Active',
      email: 'theodore@gmail.com',
      payerPhone: '+91  +966559456876',
      services: 'Arobics Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 16,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Hannibal Smith',
      status: 'Active',
      email: 'hannibalsmith@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Fitness Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 17,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'April Curtis',
      status: 'Active',
      email: 'aprilcurtis@gmail.com',
      payerPhone: '+91  +966559456876',
      services: 'Arobics Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 18,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Michael Knight',
      status: 'Lead',
      email: 'smith@gmail.com',
      payerPhone: '+91  +96655945876',
      services: 'Swim beginner for class new Sess...',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 19,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Mike Torello',
      status: 'Lead',
      email: 'hannibalsmith@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Private Language Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 2,
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Hannibal Smith",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      id: 3,
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Labeeb Labio",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      id: 4,
      createOn: "Sat, 06 Jan 2024 4:42 PM",
      payer: "Jessica Darvis",
      status: "Inactive",
      email: "theodore@gmail.com",
      payerPhone: "+91 +466558441203",
      services: "Fitness Session",
      Scheduled: "Sun, 07 Jan 2024 7:42 PM",
    },
    {
      id: 5,
      createOn: "Tue, 07 Jan 2024 1:36 PM",
      payer: "Ramees Rio",
      status: "Lead",
      email: "smith@gmail.com",
      payerPhone: "+91 +346558446722",
      services: "Boxing Session",
      Scheduled: "Thu, 04 Jan 2024 2:42 PM",
    },
    {
      id: 6,
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Joyet Joy",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      id: 7,
      createOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Althaf shaik",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 +966558441503",
      services: "Private Language Session",
      Scheduled: "Sun, 07 Jan 2024 7:42 PM",
    },
    {
      id: 8,
      createOn: "Tue, 07 Jan 2024 1:36 PM",
      payer: "Waris leo",
      status: "Lead",
      email: "smith@gmail.com",
      payerPhone: "+91 +346558446722",
      services: "Boxing Session",
      Scheduled: "Thu, 04 Jan 2024 2:42 PM",
    },
    {
      id: 9,
      createOn: 'Wed, 07 Jan 2024 2:42 PM',
      payer: 'Mike Torello',
      status: 'Inactive',
      email: 'hannibalsmith@gmail.com',
      payerPhone: '+91  +96654586876',
      services: 'Boxing Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 10,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Templeton Peck',
      status: 'Inactive',
      email: 'michaelknight@gmail.com',
      payerPhone: '+91  +966545186876',
      services: 'Boxing Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 11,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'April Curtis',
      status: 'Lead',
      email: 'aprilcurtis@gmail.com',
      payerPhone: '+91  +9665445186876',
      services: 'Exercise Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 12,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Lynn Tanner',
      status: 'Inactive',
      email: 'Lynn@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Kids play Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 13,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Col.Roderick Decker',
      status: 'Lead',
      email: 'decker@gmail.com',
      payerPhone: '+91  +966559456876',
      services: 'Fitness Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 14,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Templeton Peck',
      status: 'Inactive',
      email: 'michaelknight@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Private Language Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 15,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Theodore T.C. Calvin',
      status: 'Active',
      email: 'theodore@gmail.com',
      payerPhone: '+91  +966559456876',
      services: 'Arobics Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 16,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Hannibal Smith',
      status: 'Active',
      email: 'hannibalsmith@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Fitness Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 17,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'April Curtis',
      status: 'Active',
      email: 'aprilcurtis@gmail.com',
      payerPhone: '+91  +966559456876',
      services: 'Arobics Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 18,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Michael Knight',
      status: 'Lead',
      email: 'smith@gmail.com',
      payerPhone: '+91  +96655945876',
      services: 'Swim beginner for class new Sess...',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    },
    {
      id: 19,
      createOn: 'Sun, 07 Jan 2024 2:42 PM',
      payer: 'Mike Torello',
      status: 'Lead',
      email: 'hannibalsmith@gmail.com',
      payerPhone: '+91  +966559186876',
      services: 'Private Language Session',
      Scheduled: 'Sun, 07 Jan 2024 2:42 PM',
    }
  ];

  const [filteredValue, setFilteredValue] = useState(tableData);

  const [showData, setShowData] = useState({
    createOn: true,
    Payer: true,
    Status: true,
    Email: true,
    PayerPhone: true,
    servicess: true,
    Scheduled: true,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredValue.length / itemsPerPage);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, []);

 /* if (isLoading) {
    return <Loading />;
  }*/

    const handlePageChange = (page) => {
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
    };
  
    const paginatedData = filteredValue.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    return (
      <div className="h-screen w-full flex">
        <SideBar />
        <div className="h-auto w-[calc(100vw-3.3rem)] overflow-y-auto">
          <Header
            showData={showData}
            setShowData={setShowData}
            filteredValue={filteredValue}
            setFilteredValue={setFilteredValue}
            tableData={tableData}
          />
          <div className="w-full p-4 h-auto">
            <div className="w-full h-auto overflow-x-auto">
              <Table showData={showData} tableData={paginatedData} />
            </div>
            <TableFooter
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default DashBoard;