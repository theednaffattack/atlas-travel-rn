import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import { client } from "./apollo";
import { AuthProvider } from "./auth-provider";
import { Routes } from "./routes";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </AuthProvider>
  );
};
