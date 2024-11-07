import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
        
    } catch (err: any) {
        res.status(500).json({ message: `Error retrieving users: ${err.message}`});
    }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
    const { cognitoId } = req.params

    try {
        const user = await prisma.user.findUnique({
            where: {
                cognitoId: cognitoId
            }
        });

        res.json(user);
    } catch (err: any) {
        res.status(500).json({ message: `Error retrieving user ${err.message}`})
    }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            username,
            cognitoId,
            profilePictureUrl = "i1.jpg",
            teamId = 1,
        } = req.body

        const newUser = await prisma.user.create({
            data: {
                username,
                cognitoId,
                profilePictureUrl,
                teamId,
            }
        });

        res.json({ message: "User Created Successfully", newUser })

    } catch (err : any) {
        res.status(500).json({ message: `Error creating user ${err.message}`});
    }
};