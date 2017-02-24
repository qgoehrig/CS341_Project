CREATE TABLE [dbo].[aUser] (
    [uid]             INT         IDENTITY (1, 1) NOT NULL,
    [utype]           VARCHAR (8) NOT NULL,
    [email]           TEXT        NOT NULL,
    [pword]           TEXT        NOT NULL,
    [dateActivated]   DATE        NOT NULL,
    [dateDeactivated] DATETIME        NULL,
    PRIMARY KEY CLUSTERED ([uid] ASC)
);

CREATE TABLE [dbo].[Patient] (
    [pid]       INT          NOT NULL,
    [first]     VARCHAR (30) NOT NULL,
    [last]      VARCHAR (40) NOT NULL,
    [birthdate] DATE         NOT NULL,
    [address]   TEXT         NULL,
    PRIMARY KEY CLUSTERED ([pid] ASC),
	FOREIGN KEY ([pid]) REFERENCES [dbo].[aUser] ([uid])
);

CREATE TABLE [dbo].[Employee] (
    [eid]   INT          NOT NULL,
    [first] VARCHAR (30) NOT NULL,
    [last]  VARCHAR (40) NOT NULL,
    [etype] VARCHAR (8)  NOT NULL,
    PRIMARY KEY CLUSTERED ([eid] ASC),
    FOREIGN KEY ([eid]) REFERENCES [dbo].[aUser] ([uid])
);

CREATE TABLE [dbo].[Appointment] (
    [pid]       INT          NOT NULL,
    [adate]     DATE         NOT NULL,
    [atime]     TIME (7)     NOT NULL,
    [atype]     VARCHAR (20) NOT NULL,
    [notes]     TEXT         NULL,
    [cancelled] BIT          NULL,
    PRIMARY KEY CLUSTERED ([pid] ASC, [adate] ASC, [atime] ASC),
    FOREIGN KEY ([pid]) REFERENCES [dbo].[Patient] ([pid])
);

CREATE TABLE [dbo].[assigned_to] (
    [eid]   INT      NOT NULL,
    [pid]   INT      NOT NULL,
    [adate] DATE     NOT NULL,
    [atime] TIME (7) NOT NULL,
    PRIMARY KEY CLUSTERED ([eid] ASC, [pid] ASC, [adate] ASC, [atime] ASC),
    FOREIGN KEY ([eid]) REFERENCES [dbo].[Employee] ([eid]),
    FOREIGN KEY ([pid], [adate], [atime]) REFERENCES [dbo].[Appointment] ([pid], [adate], [atime])
);