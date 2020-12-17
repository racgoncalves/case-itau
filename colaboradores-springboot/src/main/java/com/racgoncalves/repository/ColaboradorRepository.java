package com.racgoncalves.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
import com.racgoncalves.entity.Colaborador;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.awt.print.Book;
import java.util.List;

@Repository
public class ColaboradorRepository {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public Colaborador save(Colaborador colaborador) {
        dynamoDBMapper.save(colaborador);
        return colaborador;
    }

    public Colaborador getColaboradorById(String colaboradorId) {
        return dynamoDBMapper.load(Colaborador.class, colaboradorId);
    }

    public List<Colaborador> getAll() {
        DynamoDBScanExpression dynamoDBScanExpression = new DynamoDBScanExpression();
        return dynamoDBMapper.scan(Colaborador.class, dynamoDBScanExpression);
    }

    public String delete(String colaboradorId) {
        Colaborador colab = dynamoDBMapper.load(Colaborador.class, colaboradorId);
        dynamoDBMapper.delete(colab);
        return "Colaborador Deletado!";
    }

    public String update(String colaboradorId, Colaborador colaborador) {
        dynamoDBMapper.save(colaborador,
                new DynamoDBSaveExpression()
        .withExpectedEntry("colaboradorId",
                new ExpectedAttributeValue(
                        new AttributeValue().withS(colaboradorId)
                )));
        return colaboradorId;
    }
}
