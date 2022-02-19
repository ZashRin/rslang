import React, { Fragment } from 'react';
import { AppDescription } from '../AppDescription/AppDescription';
import { TeamDescription } from '../TeamDescription/TeamDescription';

export function StartPage() {
  return (
    <>
      <main className="main">
        <AppDescription />
        <TeamDescription />
      </main>
    </>
  );
}
