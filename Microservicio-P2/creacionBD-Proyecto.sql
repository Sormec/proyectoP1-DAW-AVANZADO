USE [Votafacil]
GO
/****** Object:  Table [dbo].[candidato]    Script Date: 25/01/2024 10:07:03 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[candidato](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[presidente] [varchar](50) NULL,
	[vicepresidente] [varchar](50) NULL,
	[partido_politico] [varchar](50) NULL,
	[n_votos] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario]    Script Date: 25/01/2024 10:07:03 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[cedula] [varchar](50) NULL,
	[nombre] [varchar](50) NULL,
	[apellido] [varchar](50) NULL,
	[password] [varchar](50) NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[candidato] ON 

INSERT [dbo].[candidato] ([id], [presidente], [vicepresidente], [partido_politico], [n_votos]) VALUES (1, N'Yaku Pérez', N'Nory Pinela', N'Claro que se puede', 13)
INSERT [dbo].[candidato] ([id], [presidente], [vicepresidente], [partido_politico], [n_votos]) VALUES (2, N'Daniel Noboa', N'Verónica Abad', N'ADN', 34)
INSERT [dbo].[candidato] ([id], [presidente], [vicepresidente], [partido_politico], [n_votos]) VALUES (3, N'Luisa Gonzáles', N'Andrés Arauz', N'RC', 5)
INSERT [dbo].[candidato] ([id], [presidente], [vicepresidente], [partido_politico], [n_votos]) VALUES (4, N'Jan Topic', N'Diana Jácome', N'Por un país sin miedo', 10)
INSERT [dbo].[candidato] ([id], [presidente], [vicepresidente], [partido_politico], [n_votos]) VALUES (5, N'Otto Sonnenholzner', N'Érika Paredes', N'SUMA y Avanza', 40)
INSERT [dbo].[candidato] ([id], [presidente], [vicepresidente], [partido_politico], [n_votos]) VALUES (6, N'Bolívar Armijos', N'Linda Romero', N'Amigo', 11)
INSERT [dbo].[candidato] ([id], [presidente], [vicepresidente], [partido_politico], [n_votos]) VALUES (7, N'Fernando Villavivencio', N'Andrea Gonzáles', N'Construye', 36)
INSERT [dbo].[candidato] ([id], [presidente], [vicepresidente], [partido_politico], [n_votos]) VALUES (8, N'Xavier Hervas', N'Luz Marina Vega', N'RETO', 19)
SET IDENTITY_INSERT [dbo].[candidato] OFF
GO
SET IDENTITY_INSERT [dbo].[usuario] ON 

INSERT [dbo].[usuario] ([id], [cedula], [nombre], [apellido], [password]) VALUES (1, N'0984750698', N'Brayan', N'Hidalgo', N'123')
INSERT [dbo].[usuario] ([id], [cedula], [nombre], [apellido], [password]) VALUES (2, N'0984', N'Prueba', N'Test', N'321')
INSERT [dbo].[usuario] ([id], [cedula], [nombre], [apellido], [password]) VALUES (3, N'0984750698', N'Alejandro', N'Robles', N'A1234R')
SET IDENTITY_INSERT [dbo].[usuario] OFF
GO
/****** Object:  StoredProcedure [dbo].[GetCandidato]    Script Date: 25/01/2024 10:07:03 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[GetCandidato]
	-- Add the parameters for the stored procedure here
	@iTransaccion as VARCHAR(50),
	@iXml as XML = NULL
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	DECLARE @respuesta        AS VARCHAR(10);
	DECLARE @leyenda		  AS VARCHAR(50);
	DECLARE @id_candidato				  AS INT;
	DECLARE @presidente		  AS VARCHAR(50);
	DECLARE @vicepresidente	  AS VARCHAR(50);
	DECLARE @partido_politico AS VARCHAR(50);
	DECLARE @n_votos		  AS INT;
	--Esta condicion 'BEGIN TRY-END TRY' es como el try catch
    BEGIN TRY
		IF (@iTransaccion = 'CONSULTA_CANDIDATO_ALL')
			BEGIN
					SELECT * 
					FROM candidato

				SET @respuesta	= 'Ok';
				SET @leyenda	= 'Consulta Exitosa';
			END

		IF (@iTransaccion = 'CONSULTA_CANDIDATO_ID')
			BEGIN
				--Se extrae la información del XML que nos llega del FrontEnd
				--Para obtener el dato se usa la ruta que tiene el XML respetando las mayusculas
				SET @id_candidato = (select @iXml.value('(/Candidato/Id)[1]','INT'))
					SELECT * 
					FROM candidato 
					WHERE id = @id_candidato

				SET @respuesta	= 'Ok';
				SET @leyenda	= 'Consulta Exitosa';
			END

		IF (@iTransaccion = 'CONSULTA_CANDIDATO_GRAFICA')
			BEGIN
					SELECT  presidente, n_votos
					FROM candidato

				SET @respuesta	= 'Ok';
				SET @leyenda	= 'Consulta Exitosa';
			END
	END TRY
	BEGIN CATCH
		SET @respuesta  = 'Error';
		SET @leyenda	= 'Error al ejecutar el comando en la BD: ' + ERROR_MESSAGE();
	END CATCH
	/*Sino hay ningun error enviara la tabla de la consulta y esta tabla que menciona que
	todo esta ok pero si hay un errore enviara solo esta tabla*/
	SELECT @respuesta AS respuesta, @leyenda as leyenda
END
GO
/****** Object:  StoredProcedure [dbo].[GetUsuario]    Script Date: 25/01/2024 10:07:03 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[GetUsuario]
	-- Add the parameters for the stored procedure here
	@iTransaccion as VARCHAR(50),
	@iXml as XML = NULL
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	DECLARE @respuesta     AS VARCHAR(10);
	DECLARE @leyenda       AS VARCHAR(50);
	DECLARE @cedula		   AS VARCHAR(10);
	DECLARE @clave		   AS VARCHAR(50);

    -- Insert statements for procedure here
	BEGIN TRY
		IF (@iTransaccion = 'CONSULTA_USUARIO_LOGIN')
			BEGIN
				--Se extrae la información del XML que nos llega del FrontEnd
				--Para obtener el dato se usa la ruta que tiene el XML respetando las mayusculas
				SELECT	@cedula = DATO_XML.X.value('Cedula[1]','VARCHAR(10)'),
						@clave = DATO_XML.X.value('Password[1]','VARCHAR(50)')
				FROM @iXml.nodes('/Usuario') AS DATO_XML(X) --otra manera de agarrar los datos del XML
				
				--Se comprueba si la cedula y password son las mismas para dar acceso
				SELECT *
				FROM usuario u1
				WHERE u1.cedula = @cedula and u1.password = @clave

				SET @respuesta	= 'Ok';
				SET @leyenda	= 'Consulta Exitosa';
			END
	END TRY
	BEGIN CATCH
		SET @respuesta  = 'Error';
		SET @leyenda	= 'Error al ejecutar el comando en la BD: ' + ERROR_MESSAGE();
	END CATCH
	/*Sino hay ningun error enviara la tabla de la consulta y esta tabla que menciona que todo esta ok
	pero si hay un errore enviara solo esta tabla*/
	SELECT @respuesta AS respuesta, @leyenda as leyenda
END
GO
/****** Object:  StoredProcedure [dbo].[SetCandidato]    Script Date: 25/01/2024 10:07:03 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SetCandidato]
	-- Add the parameters for the stored procedure here
	@iTransaccion as VARCHAR(50),
	@iXml as XML = NULL
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	DECLARE @respuesta        AS VARCHAR(10);
	DECLARE @leyenda		  AS VARCHAR(100);
	DECLARE @id_candidato	  AS INT;
	DECLARE @n_votos		  AS INT;
    -- Insert statements for procedure here
	BEGIN TRY
		BEGIN TRANSACTION TRX_DATOS
			IF (@iTransaccion = 'CONTAR_VOTO')
				BEGIN
					SET @id_candidato = (select @iXml.value('(/Candidato/Id)[1]','INT'))
					SET @n_votos = (select @iXml.value('(/Candidato/N_Votos)[1]','INT'))
					
					--Verifica si el XML envio un ID correcto
					IF @id_candidato = (SELECT id FROM candidato WHERE id = @id_candidato)
						BEGIN
							--suma un voto al CANDIDATO con el ID indicado por el XML
							UPDATE candidato SET n_votos = n_votos + 1
							WHERE id = @id_candidato
							--Manda el ok de la transaccion
							SET @respuesta = 'Ok';
							SET @leyenda = 'Se ha INCREMENTADO un voto del candidato '
							+(SELECT presidente FROM candidato WHERE id = @id_candidato)+' al Sistema';	
						END
					ELSE
						THROW 51000, 'The record does not exist.', 1  --si el ID es incorrecto lanza un error
				
				END
			--Si se ha cumplido el insert correctamente hace el commit a la tabla
			IF @@TRANCOUNT > 0
				BEGIN
					COMMIT TRANSACTION TRX_DATOS;
				END
	END TRY
	BEGIN CATCH
		--Si hubo un problema en el insert se hace un rollback
		IF @@TRANCOUNT > 0
			BEGIN
				ROLLBACK TRANSACTION TRX_DATOS;
			END
		SET @respuesta  = 'Error';
		SET @leyenda	= 'Inconvenientes al realizar la transaccion: ' +@iTransaccion+ '_ Error: '+ ERROR_MESSAGE();
	END CATCH
	SELECT @respuesta AS respuesta, @leyenda as leyenda
END
GO
