import { BodyContainer, DashboardBackground, InlineContainer, InlineTitle } from './styles'

import Header from '../../components/Header';
import Card from '../../components/card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Statement from './Statement';

const Dashboard = () => {
    const wallet = 3000;
    
    return (
        <DashboardBackground>
            <Header />
            <BodyContainer>
                <div>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Saldo Atual</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <h3 className="wallet">
                                {wallet.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}
                            </h3>
                        </InlineContainer>
                    </Card>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Receber PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex: 1}} placeholder="VALOR"/>
                            <Button>Gerar código</Button>
                        </InlineContainer>

                        <p className="primary-color">Pix copia e cola</p>
                        <p className="primary-color">afgf8h651gh8as3ghf654asd8g3222fh</p>
                    </Card>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Pagar PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex: 1}} placeholder="CHAVE PIX"/>
                            <Button>Pagar PIX</Button>
                        </InlineContainer>
                    </Card>
                </div>
                <div>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Extrato da Conta</h2>
                        </InlineTitle>
                        <Statement />
                    </Card>
                </div>
            </BodyContainer>
        </DashboardBackground>
    )
}

export default Dashboard;