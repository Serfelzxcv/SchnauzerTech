import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            href="https://wa.me/51968879263 "
                            target="_blank"
                        >
                            <h3>+51 968879263</h3>
                            <p>
                                Puedes llamarnos o escribirnos para cualquier duda o consulta y te atenderemos en la brevedad.
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:schnauzertech.solutions@gmail.com"
                            target="_blank"
                        >
                            <h3>schnauzertech.solutions@gmail.com
                            </h3>
                            <p>
                                Puedes enviarnos correo para cualquier duda o consulta
                            </p>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
                
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
